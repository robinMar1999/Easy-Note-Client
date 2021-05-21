import React from "react";
import classes from "./Button.css";
import capitalize from "../Capitalize/Capitalize";

const Button = (props) => {
  const assignedClasses = [classes.Button];
  if (props.clas) {
    props.clas.forEach((cl) => {
      assignedClasses.push(classes[cl]);
    });
  }

  return (
    <div className={assignedClasses.join(" ")} onClick={props.clicked}>
      {capitalize(props.text)}
    </div>
  );
};

export default Button;
