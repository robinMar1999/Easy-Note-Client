import React from "react";
import classes from "./Navitem.css";

const Navitem = (props) => {
  console.log(props);
  return (
    <div className={classes.Navitem} onClick={props.clicked}>
      {props.title}
    </div>
  );
};

export default Navitem;
