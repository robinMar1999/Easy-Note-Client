import React, { Component } from "react";
import classes from "./Login.css";
import Input from "../../Utils/Input/Input";
import Button from "../../Utils/Button/Button";

class Login extends Component {
  render() {
    return (
      <div className={classes.Login}>
        <div className={classes.Heading}>Login</div>
        <Input name="email" type="email" />
        <Input name="password" type="password" />
        <Button text="submit" clas={["cadetBg", "white", "center", "normal"]} />
        <span>
          Don't have an account? <a href="/register">Register here</a>
        </span>
      </div>
    );
  }
}

export default Login;
