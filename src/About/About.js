import React from "react";
import classes from "./About.css";
import photo from "../Assets/robin.png";
const About = (props) => {
  return (
    <div className={classes.About}>
      <img src={photo} alt="robin" />
      <div className={classes.Heading}>
        <b>Developer: </b> Robin
      </div>
      All rights reserved
      <div className={classes.Icons}>
        <a href="https://www.instagram.com/kashyap.robin.9277/" target="_blank">
          <div className={[classes.Icon, classes.Instagram].join(" ")}>
            <i className="bi bi-instagram"></i>
          </div>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100022942960321"
          target="_blank"
        >
          <div className={[classes.Icon, classes.Facebook].join(" ")}>
            <i className="bi bi-facebook"></i>
          </div>
        </a>
        <a
          href="https://www.youtube.com/channel/UCOwEQioPllsXAYZz7QP8JMA"
          target="_blank"
        >
          <div className={[classes.Icon, classes.Youtube].join(" ")}>
            <i className="bi bi-youtube"></i>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/robin-kashyap-693658164/"
          target="_blank"
        >
          <div className={[classes.Icon, classes.Linkedin].join(" ")}>
            <i className="bi bi-linkedin"></i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default About;
