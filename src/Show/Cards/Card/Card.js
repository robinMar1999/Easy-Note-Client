import React, { Component } from "react";
import classes from "./Card.css";
import Button from "../../../Utils/Button/Button";
import { Helmet } from "react-helmet";

class Card extends Component {
  // componentDidMount() {
  //   console.log("[Card.js] componentDidMount");
  // }
  // componentDidUpdate() {
  //   console.log("[Card.js] componentDidUpdate");
  // }
  render() {
    // console.log("[Card.js] rendering...");
    return (
      <div className={classes.Frag}>
        <div
          className={classes.Card}
          dangerouslySetInnerHTML={{ __html: this.props.text }}
          ref={(el) => (this.div = el)}
        ></div>
        <div className={classes.Buttons}>
          <Button
            text="edit"
            clas={["black", "vertical", "purplehover", "normal"]}
          />
          <Button
            text="delete"
            clas={["black", "vertical", "redhover", "normal"]}
          />
        </div>
      </div>
    );
  }
}

export default Card;
