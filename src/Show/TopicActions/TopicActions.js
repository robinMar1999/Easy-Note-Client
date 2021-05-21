import React, { Fragment } from "react";
import classes from "./TopicActions.css";
import Button from "../../Utils/Button/Button";
const TopicActions = (props) => {
  return (
    <div className={classes.Main}>
      <div className={classes.Heading}>Actions for Current Topic</div>
      <div className={classes.TopicActions}>
        <Button
          text="edit"
          clas={["purplehover", "black", "medium", "vertical-small", "whiteBg"]}
        />
        <Button
          text="delete"
          clas={["redhover", "black", "medium", "whiteBg"]}
        />
      </div>
    </div>
  );
};

export default TopicActions;
