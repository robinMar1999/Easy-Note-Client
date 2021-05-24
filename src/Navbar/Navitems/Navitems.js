import React from "react";
import classes from "./Navitems.css";
import Navitem from "./Navitem/Navitem";
import { Link, NavLink } from "react-router-dom";

const Navitems = (props) => {
  return (
    <div className={classes.Navitems}>
      <NavLink activeClassName={classes.myActive} to="/" exact>
        <Navitem title="Topics" />
      </NavLink>
      <NavLink activeClassName={classes.myActive} to="/help">
        <Navitem title="Help" />
      </NavLink>
      <NavLink activeClassName={classes.myActive} to="/about">
        <Navitem title="About" />
      </NavLink>
      {props.isLoggedIn && <Navitem title="Logout" {...props} />}
    </div>
  );
};

export default Navitems;
