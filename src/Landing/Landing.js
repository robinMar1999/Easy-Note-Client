import React from "react";
import classes from "./Landing.css";
import Button from "../Utils/Button/Button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={classes.Landing}>
      <Link to="/login">
        <Button
          text="login"
          clas={["white", "horizontal", "cadethover", "normal"]}
        />
      </Link>
      <Link to="/register">
        <Button
          text="register"
          clas={["white", "horizontal", "greenhover", "normal"]}
        />
      </Link>
    </div>
  );
};

export default Landing;
