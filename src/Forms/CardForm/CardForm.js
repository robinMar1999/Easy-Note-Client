import React, { Component } from "react";
import classes from "./CardForm.css";
import Input from "../../Utils/Input/Input";
import Button from "../../Utils/Button/Button";
import Heading from "../../Utils/Heading/Heading";
import Message from "../../Utils/Message/Message";
import Backdrop from "../../Utils/Backdrop/Backdrop";
import Modal from "../../Utils/Modal/Modal";
import marked from "marked";
import createDomPurify from "dompurify";
import axios from "axios";
const dompurify = createDomPurify();

class CardForm extends Component {
  state = {
    text: "",
    sanitizedText: "",
    error: false,
    msg: null,
    loadingMsg: null,
    loading: false,
    showBackdrop: false,
    showModal: false,
  };

  componentDidMount() {
    if (this.props.new) {
      return;
    }
    this.setState({
      error: false,
      msg: null,
      loading: true,
      loadingMsg: "Loading...",
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
    this.setState({
      error: false,
      msg: null,
      loading: true,
      loadingMsg: this.props.new ? "Adding..." : "Updating...",
    });
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
        if (err.response && err.response.data) {
          this.setState({
            error: true,
            msg: err.response.data.errors[0].msg,
            loading: false,
          });
        } else {
          this.setState({
            error: true,
            msg: err.message,
            loading: false,
          });
        }
      });
  };

  showPreview = () => {
    const sanitizedText = dompurify.sanitize(marked(this.state.text));
    this.setState({
      showBackdrop: true,
      showModal: true,
      sanitizedText: sanitizedText,
    });
  };

  hidePreview = () => {
    this.setState({
      showBackdrop: false,
      showModal: false,
      sanitizedText: "",
    });
  };

  render() {
    return (
      <div className={classes.CardForm}>
        {this.state.showBackdrop ? (
          <Backdrop clicked={this.hidePreview} />
        ) : null}
        {this.state.showModal ? (
          <Modal content={this.state.sanitizedText} />
        ) : null}
        {this.state.loading ? (
          <Message clas="Loading" msg={this.state.loadingMsg} />
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
            text="cancel"
            clas={["redBg", "white", "vertical", "horizontal", "normal"]}
            clicked={this.onCancelHandler}
          />
          <Button
            text="preview"
            clas={["previewBg", "white", "vertical", "horizontal", "normal"]}
            clicked={this.showPreview}
          />
          <Button
            text="submit"
            clas={["cadetBg", "white", "vertical", "horizontal", "normal"]}
            clicked={this.onSubmitHandler}
          />
        </div>
      </div>
    );
  }
}

export default CardForm;
