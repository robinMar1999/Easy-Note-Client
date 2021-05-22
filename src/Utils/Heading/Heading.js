import React from "react";
import classes from "./Heading.css";
const Heading = (props) => {
  return <div className={classes.Heading}>{props.heading}</div>;
};

export default Heading;
