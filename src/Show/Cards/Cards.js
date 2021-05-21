import React, { Component } from "react";
import classes from "./Cards.css";
import Card from "./Card/Card";

class Cards extends Component {
  render() {
    let cards = this.props.cards.map((card) => {
      return <Card key={card._id} text={card.sanitizedText} />;
    });
    return <div className={classes.Cards}>{cards}</div>;
  }
}

export default Cards;
