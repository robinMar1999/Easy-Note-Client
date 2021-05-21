import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import classes from "./App.css";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Login from "./Forms/Login/Login";
import Register from "./Forms/Register/Register";
import Show from "./Show/Show";
import TopicForm from "./Forms/TopicForm/TopicForm";
import CardForm from "./Forms/CardForm/CardForm";

class App extends Component {
  state = {
    isLoggedIn: false,
    token: null,
  };

  render() {
    return (
      <div className={classes.App}>
        <Navbar />
        {/* <Landing /> */}
        <Switch>
          <Route
            path="/"
            exact
            component={(props) => <Show id={null} {...props} />}
          />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/topic/new" component={TopicForm} />
          <Route path="/card/new" component={CardForm} />
          <Route
            path="/:id"
            component={(props) => (
              <Show id={props.match.params.id} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
