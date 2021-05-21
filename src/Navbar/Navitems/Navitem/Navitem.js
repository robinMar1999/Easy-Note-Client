import React from "react";
import classes from "./Navitem.css";

const Navitem = (props) => {
  return <div className={classes.Navitem}>{props.title}</div>;
};

export default Navitem;
