import React from "react";
import classes from "./Landing.css";
import Button from "../Utils/Button/Button";

const Landing = () => {
  return (
    <div className={classes.Landing}>
      <Button
        text="login"
        clas={["white", "horizontal", "cadethover", "normal"]}
      />
      <Button
        text="register"
        clas={["white", "horizontal", "greenhover", "normal"]}
      />
    </div>
  );
};

export default Landing;
