import React, { Component } from "react";
import classes from "./Card.css";
import Button from "../../../Utils/Button/Button";
import { Helmet } from "react-helmet";

class Card extends Component {
  render() {
    return (
      <div className={classes.Frag}>
        <div
          className={classes.Card}
          dangerouslySetInnerHTML={{ __html: this.props.text }}
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
        <Helmet>
          <script
            src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
            defer
          ></script>
        </Helmet>
      </div>
    );
  }
}

export default Card;
