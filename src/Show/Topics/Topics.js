import React, { Fragment } from "react";
import Topic from "./Topic/Topic";
import classes from "./Topics.css";
import Hr from "../../Utils/Hr/Hr";

const Topics = (props) => {
  if (!props.topics || props.topics.length === 0) {
    return null;
  }
  let topics = [<Topic key={0} title={"Create New Topic"} new />];
  props.topics.forEach((topic) => {
    topics.push(<Topic key={topic.id} title={topic.title} />);
  });
  return (
    <Fragment>
      <div className={classes.Topics}>{topics}</div>
      <Hr />
    </Fragment>
  );
};

export default Topics;
