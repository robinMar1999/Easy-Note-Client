import React, { Component } from "react";
import classes from "./CardForm.css";
import Input from "../../Utils/Input/Input";
import Button from "../../Utils/Button/Button";
import Heading from "../../Utils/Heading/Heading";
import Message from "../../Utils/Message/Message";
import axios from "axios";

class CardForm extends Component {
  state = {
    text: "",
    error: false,
    msg: null,
    loading: false,
  };

  componentDidMount() {
    if (this.props.new) {
      return;
    }
    this.setState({
      error: false,
      msg: null,
      loading: true,
    });
    let url = `/card/one/${this.props.cardId}`;
    axios({
      url: url,
      method: "get",
      headers: {
        Authorization: this.props.token,
      },
    })
      .then((res) => {
        console.log(res.data);
        this.setState({
          text: res.data.card.text,
          error: false,
          msg: null,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
          msg: err.response.data.errors[0].msg,
          loading: false,
        });
      });
  }

  onChangeHandler = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  onCancelHandler = () => {
    this.props.history.push({ pathname: `/${this.props.topicId}` });
  };

  onSubmitHandler = () => {
    console.log("Submit clicked");
    let method;
    if (this.props.new) {
      method = "post";
    } else {
      method = "patch";
    }
    axios({
      url: `/card/${this.props.new ? this.props.topicId : this.props.cardId}`,
      method: method,
      data: {
        text: this.state.text,
      },
      headers: {
        Authorization: this.props.token,
      },
    })
      .then((res) => {
        console.log(res.data);
        this.props.history.push({ pathname: `/${this.props.topicId}` });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    console.log(this.props);
    return (
      <div className={classes.CardForm}>
        {this.state.loading ? (
          <Message clas="Loading" msg="Loading..." />
        ) : null}
        {this.state.error ? (
          <Message clas="Error" msg={this.state.msg} />
        ) : null}
        <Heading heading={this.props.new ? "New Card" : "Edit Card"} />
        <Input
          name="text"
          type="textarea"
          value={this.state.text}
          changed={this.onChangeHandler}
        />
        <div className={classes.Buttons}>
          <Button
            text="submit"
            clas={["cadetBg", "white", "vertical", "horizontal", "normal"]}
            clicked={this.onSubmitHandler}
          />
          <Button
            text="cancel"
            clas={["redBg", "white", "vertical", "horizontal", "normal"]}
            clicked={this.onCancelHandler}
          />
        </div>
      </div>
    );
  }
}

export default CardForm;
