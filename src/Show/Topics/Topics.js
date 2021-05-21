import React, { Fragment } from "react";
import Topic from "./Topic/Topic";
import classes from "./Topics.css";
import Hr from "../../Utils/Hr/Hr";

const Topics = (props) => {
  let topics = [
    <Topic url="/topic/new" key={0} title={"Create New Topic"} new />,
  ];
  if (props.topics) {
    props.topics.forEach((topic) => {
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
};

export default Topics;
