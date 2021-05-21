import React from "react";
import classes from "./Input.css";
import capitalize from "../../Utils/Capitalize/Capitalize";

const Input = (props) => {
  let myInput = null;
  if (props.type == "textarea") {
    myInput = (
      <textarea
        name={props.name}
        value={props.value}
        onChange={props.changed}
        rows="10"
      />
    );
  } else {
    myInput = (
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.changed}
      />
    );
  }
  return (
    <div className={classes.Input}>
      <label htmlFor={props.name}>{capitalize(props.name)}:</label>
      {myInput}
    </div>
  );
};

export default Input;
