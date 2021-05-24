import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import classes from "./App.css";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Login from "./Forms/Login/Login";
import Register from "./Forms/Register/Register";
import Show from "./Show/Show";
import TopicForm from "./Forms/TopicForm/TopicForm";
import CardForm from "./Forms/CardForm/CardForm";
import About from "./About/About";
import Help from "./Help/Help";

class App extends Component {
  state = {
    isLoggedIn: false,
    token: null,
    finalToken: null,
  };

  static getDerivedStateFromProps(props, state) {
    const storageToken = localStorage.getItem("token");
    if (storageToken) {
      return {
        isLoggedIn: true,
        token: storageToken,
        finalToken: `Bearer ${storageToken}`,
      };
    } else {
      return state;
    }
  }

  UpdateLoginStatus = () => {
    const storageToken = localStorage.getItem("token");
    if (!storageToken) {
      return;
    }
    if (this.state.isLoggedIn && storageToken === this.state.token) {
      return;
    }
    this.setState({
      isLoggedIn: true,
      token: storageToken,
      finalToken: `Bearer ${storageToken}`,
    });
  };

  Logout = () => {
    localStorage.clear();
    this.setState({
      isLoggedIn: false,
      token: null,
      finalToken: null,
    });
  };

  render() {
    let root = () => {
      return null;
    };
    if (this.state.isLoggedIn) {
      root = (props) => {
        return <Show id={null} {...props} token={this.state.finalToken} />;
      };
    } else {
      root = (props) => {
        return <Landing {...props} />;
      };
    }
    return (
      <div className={classes.App}>
        <Navbar clicked={this.Logout} />
        <Switch>
          <Route path="/help" component={Help} />
          <Route path="/about" component={About} />
          <Route
            path="/login"
            component={(props) => (
              <Login {...props} submitted={this.UpdateLoginStatus} />
            )}
          />
          <Route
            path="/register"
            component={(props) => (
              <Register {...props} submitted={this.UpdateLoginStatus} />
            )}
          />

          {this.state.isLoggedIn ? (
            <Route
              path="/:id/edit"
              exact
              component={(props) => (
                <TopicForm
                  id={props.match.params.id}
                  {...props}
                  token={this.state.finalToken}
                />
              )}
            />
          ) : null}

          {this.state.isLoggedIn ? (
            <Route
              path="/:id/topic/new"
              exact
              component={(props) => (
                <TopicForm
                  new
                  id={props.match.params.id}
                  {...props}
                  token={this.state.finalToken}
                />
              )}
            />
          ) : null}
          {this.state.isLoggedIn ? (
            <Route
              path="/topic/new"
              exact
              component={(props) => (
                <TopicForm
                  new
                  id={null}
                  {...props}
                  token={this.state.finalToken}
                />
              )}
            />
          ) : null}
          {this.state.isLoggedIn ? (
            <Route
              path="/:topicId/card/new"
              exact
              component={(props) => (
                <CardForm
                  new
                  topicId={props.match.params.topicId}
                  {...props}
                  token={this.state.finalToken}
                />
              )}
            />
          ) : null}
          {this.state.isLoggedIn ? (
            <Route
              path="/:topicId/card/:cardId/edit"
              exact
              component={(props) => (
                <CardForm
                  topicId={props.match.params.topicId}
                  cardId={props.match.params.cardId}
                  {...props}
                  token={this.state.finalToken}
                />
              )}
            />
          ) : null}
          {this.state.isLoggedIn ? (
            <Route
              path="/:id"
              exact
              component={(props) => (
                <Show
                  id={props.match.params.id}
                  {...props}
                  token={this.state.finalToken}
                />
              )}
            />
          ) : null}
          <Route path="/" exact component={root} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
