import React, { Component, Fragment } from "react";
import classes from "./TopicActions.css";
import Button from "../../Utils/Button/Button";
import Backdrop from "../../Utils/Backdrop/Backdrop";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Confirm from "../../Utils/Confirm/Confirm";
class TopicActions extends Component {
  state = {
    deleting: false,
    msg: "",
    error: false,
    confirm: false,
  };
  deleteHandler = () => {
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
  openConfirm = () => {
    this.setState({
      confirm: true,
    });
  };
  closeConfirm = () => {
    this.setState({
      confirm: false,
    });
  };
  closeConfirmAndDelete = () => {
    this.setState({
      confirm: false,
      deleting: true,
      msg: "Deleting...",
      error: false,
    });
    this.deleteHandler();
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
        {this.state.confirm && <Backdrop clicked={this.closeConfirm} />}
        {this.state.confirm && (
          <Confirm
            cancelled={this.closeConfirm}
            submitted={this.closeConfirmAndDelete}
            topicDelete
          />
        )}

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
              clicked={this.openConfirm}
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
