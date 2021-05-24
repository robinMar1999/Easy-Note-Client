import React, { Component } from "react";
import classes from "./Modal.css";
class Modal extends Component {
  componentDidMount() {
    window.MathJax.typeset();
  }
  render() {
    return (
      <div className={classes.Modal}>
        <div dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
        <div className={classes.Cross} onClick={this.props.clicked}>
          <i className="bi bi-x-circle-fill"></i>
        </div>
      </div>
    );
  }
}

export default Modal;
