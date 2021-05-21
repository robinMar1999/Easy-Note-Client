import React, { Component } from "react";
import classes from "./Show.css";
import Topics from "./Topics/Topics";
import Cards from "./Cards/Cards";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import TopicActions from "./TopicActions/TopicActions";

class Show extends Component {
  render() {
    let crumbs = [
      {
        id: 1,
        title: "Topics",
      },
      {
        id: 2,
        title: "Maths",
      },
      {
        id: 3,
        title: "Number Theory",
      },
    ];
    let topics = [
      {
        id: 1,
        title: "GCD",
      },
      {
        id: 2,
        title: "LCM",
      },
      {
        id: 3,
        title: "Fermet's Last Theorem",
      },
      {
        id: 4,
        title: "Prime Numbers",
      },
    ];
    let cards = [
      {
        _id: 1,
        sanitizedText: "Card 1",
      },
      {
        _id: 2,
        sanitizedText: "Card 2",
      },
      {
        _id: 3,
        sanitizedText: "Card 3",
      },
      {
        _id: 4,
        sanitizedText: "Card 4",
      },
      {
        _id: 5,
        sanitizedText: "Card 5",
      },
      {
        _id: 6,
        sanitizedText: "Card 6",
      },
    ];
    return (
      <div className={classes.Show}>
        <Breadcrumb crumbs={crumbs} />
        <TopicActions />
        <Topics topics={topics} />
        <Cards cards={cards} />
      </div>
    );
  }
}

export default Show;
