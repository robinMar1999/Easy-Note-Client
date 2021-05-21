import React from "react";
import classes from "./Navbar.css";

import Logo from "./Logo/Logo";
import Navitems from "./Navitems/Navitems";

const Navbar = (props) => {
  return (
    <div className={classes.Navbar}>
      <Logo />
      <Navitems />
    </div>
  );
};

export default Navbar;
