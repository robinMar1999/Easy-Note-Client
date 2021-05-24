import React, { Component } from "react";
import classes from "./Modal.css";
class Modal extends Component {
  componentDidMount() {
    window.MathJax.typeset();
  }
  render() {
    return (
      <div
        className={classes.Modal}
        dangerouslySetInnerHTML={{ __html: this.props.content }}
      ></div>
    );
  }
}

export default Modal;
