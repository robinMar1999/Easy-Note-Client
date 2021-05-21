import React, { Component } from "react";
import classes from "./CardForm.css";
import Input from "../../Utils/Input/Input";
import Button from "../../Utils/Button/Button";

class CardForm extends Component {
  render() {
    return (
      <div className={classes.CardForm}>
        <div className={classes.Heading}>{this.props.heading}</div>
        <Input name="text" type="textarea" />
        <Button text="submit" clas={["cadetBg", "white", "center", "normal"]} />
      </div>
    );
  }
}

export default CardForm;
