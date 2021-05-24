import React from "react";
import classes from "./Confirm.css";
import Button from "../Button/Button";
const Confirm = (props) => {
  return (
    <div className={classes.Confirm}>
      <div className={classes.Heading}>
        {props.topicDelete
          ? "All subtopics & cards will be deleted. Proceed?"
          : "Are you sure?"}
      </div>
      <div className={classes.Buttons}>
        <Button
          text="yes"
          clas={["redBg", "white", "horizontal", "normal"]}
          clicked={props.submitted}
        />
        <Button
          text="no"
          clas={["cadetBg", "white", "horizontal", "normal"]}
          clicked={props.cancelled}
        />
      </div>
    </div>
  );
};

export default Confirm;
