import React, { Component } from "react";
import classes from "./App.css";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Login from "./Forms/Login/Login";
import Register from "./Forms/Register/Register";
import Show from "./Show/Show";
import TopicForm from "./Forms/TopicForm/TopicForm";
import CardForm from "./Forms/CardForm/CardForm";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Navbar />
        <Landing />
        <Login />
        <Register />
        <Show />
        <TopicForm heading="New Topic" />
        <CardForm heading="New Card" />
      </div>
    );
  }
}

export default App;
