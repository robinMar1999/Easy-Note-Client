import React from "react";
import classes from "./Navitems.css";
import Navitem from "./Navitem/Navitem";

const Navitems = (props) => {
  return (
    <div className={classes.Navitems}>
      <Navitem title="Topics" />
      <Navitem title="Logout" />
    </div>
  );
};

export default Navitems;
