import React, { Component } from "react";
import classes from "./Register.css";
import Input from "../../Utils/Input/Input";
import Button from "../../Utils/Button/Button";
import { Link } from "react-router-dom";
import axios from "axios";

class Register extends Component {
  state = {
    formData: {
      name: "",
      email: "",
      password: "",
    },
    error: false,
    msg: null,
    loading: false,
  };

  onChangeHandler = (event, type) => {
    const currFormData = { ...this.state.formData };
    currFormData[type] = event.target.value;
    this.setState({
      formData: currFormData,
    });
  };

  onSubmitHandler = () => {
    this.setState({
      loading: true,
      error: false,
      msg: null,
    });
    axios({
      method: "post",
      url: "/users",
      data: {
        name: this.state.formData.name,
        email: this.state.formData.email,
        password: this.state.formData.password,
      },
    })
      .then((res) => {
        this.setState({
          error: false,
          msg: null,
          loading: false,
        });
        localStorage.setItem("token", res.data.token);
        this.props.submitted();
        this.props.history.push({ pathname: "/" });
      })
      .catch((err) => {
        this.setState({
          error: true,
          msg: err.response.data.errors[0].msg,
          loading: false,
        });
      });
    // this.props.history.replace({ pathname: "/" });
  };
  render() {
    return (
      <div className={classes.Register}>
        {this.state.error ? (
          <div className={classes.Error}>{this.state.msg}</div>
        ) : null}
        {this.state.loading ? (
          <div className={classes.Loading}>Registering...</div>
        ) : null}

        <div className={classes.Heading}>Register</div>
        <Input
          name="name"
          type="name"
          value={this.state.formData.name}
          changed={(event) => this.onChangeHandler(event, "name")}
        />
        <Input
          name="email"
          type="email"
          value={this.state.formData.email}
          changed={(event) => this.onChangeHandler(event, "email")}
        />
        <Input
          name="password"
          type="password"
          value={this.state.formData.password}
          changed={(event) => this.onChangeHandler(event, "password")}
        />
        <Button
          text="submit"
          clas={["cadetBg", "white", "center", "normal"]}
          clicked={this.onSubmitHandler}
        />
        <span>
          Already have an account? <Link to="/login">Login here</Link>
        </span>
      </div>
    );
  }
}

export default Register;
