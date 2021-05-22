import React from "react";
import classes from "./Message.css";
const Message = (props) => {
  return <div className={classes[props.clas]}>{props.msg}</div>;
};

export default Message;
