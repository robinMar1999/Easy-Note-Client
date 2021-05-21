import React, { Component } from "react";
import classes from "./TopicForm.css";
import Input from "../../Utils/Input/Input";
import Button from "../../Utils/Button/Button";

class TopicForm extends Component {
  render() {
    return (
      <div className={classes.TopicForm}>
        <div className={classes.Heading}>{this.props.heading}</div>
        <Input name="title" type="text" />
        <Button text="submit" clas={["cadetBg", "white", "center", "normal"]} />
      </div>
    );
  }
}

export default TopicForm;
