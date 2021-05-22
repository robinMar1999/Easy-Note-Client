import React, { Component } from "react";
import classes from "./Card.css";
import Button from "../../../Utils/Button/Button";
import { Link } from "react-router-dom";
import axios from "axios";

class Card extends Component {
  deleteHandler = () => {
    axios({
      url: `/card/${this.props.cardId}`,
      method: "delete",
      headers: {
        Authorization: this.props.token,
      },
    })
      .then((res) => {
        console.log(res.data);
        this.props.deleted();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  render() {
    return (
      <div className={classes.Frag}>
        <div
          className={classes.Card}
          dangerouslySetInnerHTML={{ __html: this.props.text }}
          ref={(el) => (this.div = el)}
        ></div>
        <div className={classes.Buttons}>
          <Link to={`/${this.props.topicId}/card/${this.props.cardId}/edit`}>
            <Button
              text="edit"
              clas={["black", "vertical", "purplehover", "normal"]}
            />
          </Link>
          <Button
            text="delete"
            clas={["black", "vertical", "redhover", "normal"]}
            clicked={this.deleteHandler}
          />
        </div>
      </div>
    );
  }
}

export default Card;
