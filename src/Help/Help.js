import React from "react";
import classes from "./Help.css";
const Help = (props) => {
  return (
    <div className={classes.Help}>
      <div className={classes.Heading}>Features</div>
      <ol>
        <li>This is a notes making application.</li>
        <li>
          You can use{" "}
          <a href="https://www.markdownguide.org/basic-syntax/" target="_blank">
            Markdown
          </a>{" "}
          and{" "}
          <a href="https://katex.org/docs/supported.html" target="_blank">
            Latex
          </a>{" "}
          to style your notes.
        </li>
        <li>You can preview your notes before storing them.</li>
        <li>
          You can create windows like folder structure{" "}
          <b>(with unlimited depth)</b> to structure your notes.
        </li>
        <li>This app has breadcrumb component for easy navigation.</li>
      </ol>
      <div className={classes.Heading}>How To</div>
      <ol>
        <li>
          To do any action, you have to authenticate <b>(Login / Register)</b>{" "}
          first.
        </li>
        <li>
          To create a new Topic, click on <b>Create New Topic</b> and then you
          can create subtopics and cards <b>(your notes)</b> for that topic.
        </li>
        <li>
          To create a new Card, click on <b>New Card</b>.
        </li>
        <li>
          To <b>edit</b> / <b>delete</b> a Topic, first visit that topic and
          then click on <b>edit</b> / <b>delete</b> button given in{" "}
          <b>Actions for this topic</b> menu.
        </li>
        <li>
          To <b>edit</b> / <b>delete</b> a Card, click on the appropriate button
          given next to that card.
        </li>
      </ol>
    </div>
  );
};

export default Help;
