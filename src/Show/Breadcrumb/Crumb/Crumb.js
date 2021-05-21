import React from "react";
import { Link } from "react-router-dom";
import classes from "./Crumb.css";

const Crumb = (props) => {
  const aclass = [];
  if (props.nonactive) {
    aclass.push(classes.NonActive);
  }
  // we are also getting props.id
  return (
    <div className={classes.Crumb}>
      {props.nonactive ? (
        <a href={null} className={aclass.join(" ")}>
          {props.title}
        </a>
      ) : (
        <Link
          to={props.nonactive ? "#" : props.url}
          className={aclass.join(" ")}
        >
          {props.title}
        </Link>
      )}

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
