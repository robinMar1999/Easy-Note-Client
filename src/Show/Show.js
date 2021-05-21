import React, { Component } from "react";
import classes from "./Show.css";
import Topics from "./Topics/Topics";
import Cards from "./Cards/Cards";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import TopicActions from "./TopicActions/TopicActions";
import axios from "axios";
import isEqual from "lodash.isequal";

class Show extends Component {
  state = {
    topicContent: null,
    loading: true,
    error: false,
  };

  AreEqual = (obj1, obj2) => {
    let ans = true;
    for (let key in obj1) {
    }
  };

  componentDidMount() {
    // console.log("[Show.js] componentDidMount");
    let url = "/topic";
    if (this.props.id) {
      url = url + "/" + this.props.id;
    }
    axios
      .get(url)
      .then((response) => {
        this.setState({
          topicContent: response.data,
          loading: false,
          error: false,
        });
      })
      .catch((err) => {
        this.setState({
          topicContent: null,
          loading: false,
          error: true,
        });
      });
    window.MathJax.typeset();
  }
  componentDidUpdate() {
    // console.log("[Show.js] componentDidUpdate");
    let url = "/topic";
    if (this.props.id) {
      url = url + "/" + this.props.id;
    }
    axios
      .get(url)
      .then((response) => {
        if (!isEqual(response.data, this.state.topicContent)) {
          this.setState({
            topicContent: response.data,
            loading: false,
            error: false,
          });
        }
      })
      .catch((err) => {
        this.setState({
          topicContent: null,
          loading: false,
          error: true,
        });
      });
    window.MathJax.typeset();
  }
  setCrumbs() {
    let crumbs = [
      {
        id: "0",
        url: "/",
        title: "Topics",
      },
    ];
    if (this.state.topicContent && this.state.topicContent.topic) {
      this.state.topicContent.topic.parents.forEach((parent) => {
        crumbs.push({
          id: parent.parent,
          url: `/${parent.parent}`,
          title: parent.title,
        });
      });
    }
    return crumbs;
  }
  setTopics() {
    let topics = [];
    if (this.state.topicContent && this.state.topicContent.topics) {
      this.state.topicContent.topics.forEach((topic) => {
        topics.push({
          id: topic._id,
          title: topic.title,
        });
      });
    }
    return topics;
  }
  setCards() {
    let cards = [];
    if (this.state.topicContent && this.state.topicContent.cards) {
      this.state.topicContent.cards.forEach((card) => {
        cards.push({
          id: card._id,
          text: card.sanitizedText,
        });
      });
    }
    return cards;
  }
  render() {
    // console.log("[Show.js] rendering...");
    let crumbs = this.setCrumbs();
    let topics = this.setTopics();
    let cards = this.setCards();
    return this.state.loading ? (
      <div className={classes.Loading}>
        <div className={classes.ldsRing}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    ) : this.state.error ? (
      <div className={classes.Error}>
        <h1>Something went wrong!</h1>
      </div>
    ) : (
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
