import React from "react";
import classes from "./Landing.css";
import Button from "../Utils/Button/Button";

const Landing = () => {
  return (
    <div className={classes.Landing}>
      <Button text="login" clas={["white", "horizontal", "cadethover"]} />
      <Button text="register" clas={["white", "horizontal", "greenhover"]} />
    </div>
  );
};

export default Landing;
