import React from "react";
import classes from "./Topic.css";

const Topic = (props) => {
  return (
    <div className={props.new ? classes.New : classes.Topic}>
      <span className={classes.Title}>
        <span className={classes.Icon}>
          {props.new ? (
            <i className="bi bi-folder-plus"></i>
          ) : (
            <i className="bi bi-folder"></i>
          )}
        </span>

        {props.title}
      </span>
      <span className={classes.Icon}>
        {props.new ? null : <i className="bi bi-arrow-right"></i>}
      </span>
    </div>
  );
};

export default Topic;
