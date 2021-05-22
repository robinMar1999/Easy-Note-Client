import React, { Component } from "react";
import classes from "./Cards.css";
import Card from "./Card/Card";

class Cards extends Component {
  // componentDidMount() {
  //   console.log("[Cards.js] componentDidMount");
  // }
  // componentDidUpdate() {
  //   console.log("[Cards.js] componentDidUpdate");
  // }
  render() {
    // console.log("[Cards.js] rendering...");
    let cards = [];
    this.props.cards.forEach((card) => {
      cards.push(
        <Card
          topicId={this.props.topicId}
          cardId={card.id}
          key={card.id}
          text={card.text}
          deleted={this.props.deleted}
          token={this.props.token}
        />
      );
    });
    return <div className={classes.Cards}>{cards}</div>;
  }
}

export default Cards;
