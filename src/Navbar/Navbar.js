import React from "react";
import classes from "./Navbar.css";

import Logo from "./Logo/Logo";
import Navitems from "./Navitems/Navitems";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className={classes.Navbar}>
      <Link to="/">
        <Logo />
      </Link>

      <Navitems {...props} />
    </div>
  );
};

export default Navbar;
