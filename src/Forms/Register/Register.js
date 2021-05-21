import React, { Component } from "react";
import classes from "./Register.css";
import Input from "../../Utils/Input/Input";
import Button from "../../Utils/Button/Button";

class Register extends Component {
  render() {
    return (
      <div className={classes.Register}>
        <div className={classes.Heading}>Register</div>
        <Input name="name" type="text" />
        <Input name="email" type="email" />
        <Input name="password" type="password" />
        <Button text="submit" clas={["cadetBg", "white", "center"]} />
        <span>
          Already have an account? <a href="/login">Login here</a>
        </span>
      </div>
    );
  }
}

export default Register;
