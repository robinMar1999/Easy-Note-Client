import React, { Component, Fragment } from "react";
import classes from "./TopicActions.css";
import Button from "../../Utils/Button/Button";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
class TopicActions extends Component {
  state = {
    deleting: false,
    msg: "",
    error: false,
  };
  deleteHandler = () => {
    this.setState({
      deleting: true,
      msg: "Deleting...",
      error: false,
    });
    axios({
      url: `/topic/${this.props.id}`,
      method: "delete",
      headers: {
        Authorization: this.props.token,
      },
    })
      .then((res) => {
        let pathname = "/";
        if (this.props.del) {
          pathname = pathname + this.props.del;
        }
        this.props.history.push({ pathname: pathname });
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          this.setState({
            deleting: false,
            error: true,
            msg: err.response.data.errors[0].msg,
          });
        } else {
          this.setState({
            deleting: false,
            error: true,
            msg: err.message,
          });
        }
      });
  };
  render() {
    return (
      <Fragment>
        {this.state.deleting ? (
          <div className={[classes.Message, classes.Loading].join(" ")}>
            {this.state.msg}
          </div>
        ) : null}

        {this.state.error ? (
          <div className={[classes.Message, classes.Error].join(" ")}>
            {this.state.msg}
          </div>
        ) : null}

        <div className={classes.Main}>
          <div className={classes.Heading}>Actions for Current Topic</div>
          <div className={classes.TopicActions}>
            <Link to={`${this.props.id}/edit`}>
              <Button
                text="edit"
                clas={[
                  "purplehover",
                  "black",
                  "medium",
                  "vertical-small",
                  "whiteBg",
                ]}
              />
            </Link>
            <Button
              text="delete"
              clas={["redhover", "black", "medium", "whiteBg"]}
              clicked={this.deleteHandler}
            />
          </div>
        </div>
        <Link to={`/${this.props.id}/card/new`}>
          <div className={classes.New}>
            <span className={classes.Icon}>
              {/* <i class="bi bi-plus"></i> */}
              <i className="bi bi-file-text"></i>
            </span>
            <span>New Card</span>
          </div>
        </Link>
      </Fragment>
    );
  }
}

export default withRouter(TopicActions);
