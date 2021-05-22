import React from "react";
import classes from "./Navitems.css";
import Navitem from "./Navitem/Navitem";
import { Link } from "react-router-dom";

const Navitems = (props) => {
  return (
    <div className={classes.Navitems}>
      <Link to="/">
        <Navitem title="Topics" />
      </Link>
      <Navitem title="Logout" {...props} />
    </div>
  );
};

export default Navitems;
