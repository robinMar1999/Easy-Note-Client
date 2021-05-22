import React, { Component, Fragment } from "react";
import Topic from "./Topic/Topic";
import classes from "./Topics.css";
import Hr from "../../Utils/Hr/Hr";
import { Link } from "react-router-dom";

class Topics extends Component {
  render() {
    let url;
    if (this.props.id) {
      url = `/${this.props.id}/topic/new`;
    } else {
      url = "/topic/new";
    }
    let topics = [<Topic url={url} key={0} title={"Create New Topic"} new />];
    if (this.props.topics) {
      this.props.topics.forEach((topic) => {
        topics.push(
          <Topic url={`/${topic.id}`} key={topic.id} title={topic.title} />
        );
      });
    }

    return (
      <Fragment>
        <div className={classes.Topics}>{topics}</div>
        <Hr />
      </Fragment>
    );
  }
}

export default Topics;
