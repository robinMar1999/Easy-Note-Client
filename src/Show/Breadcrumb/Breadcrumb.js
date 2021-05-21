import React, { Fragment } from "react";
import classes from "./Breadcrumb.css";
import Crumb from "./Crumb/Crumb";
import Hr from "../../Utils/Hr/Hr";

const Breadcrumb = (props) => {
  let crumbs = null;
  if (props.crumbs) {
    crumbs = [];
    for (let i = 0; i < props.crumbs.length; i++) {
      const crumb = props.crumbs[i];
      if (i === props.crumbs.length - 1) {
        crumbs.push(
          <Crumb key={crumb.id} url={crumb.url} title={crumb.title} nonactive />
        );
      } else {
        crumbs.push(
          <Crumb key={crumb.id} url={crumb.url} title={crumb.title} />
        );
      }
    }
  }
  return (
    <Fragment>
      <div className={classes.Breadcrumb}>{crumbs}</div>
      <Hr />
    </Fragment>
  );
};

export default Breadcrumb;
