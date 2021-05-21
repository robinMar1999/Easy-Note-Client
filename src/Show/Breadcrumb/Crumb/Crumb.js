import React from "react";
import classes from "./Crumb.css";

const Crumb = (props) => {
  const aclass = [];
  if (props.nonactive) {
    aclass.push(classes.NonActive);
  }
  let url = "/";
  if (props.id) {
    url = url + props.id;
  }
  if (props.nonactive) {
  }
  // we are also getting props.id
  return (
    <div className={classes.Crumb}>
      <a href={props.nonactive ? null : url} className={aclass.join(" ")}>
        {props.title}
      </a>
      {props.nonactive ? null : (
        <span>
          <i className="bi bi-chevron-right"></i>
          {/* <i className="fa fa-chevron-right" aria-hidden="true"></i> */}
        </span>
      )}
    </div>
  );
};

export default Crumb;
