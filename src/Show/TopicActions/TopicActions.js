import React, { Fragment } from "react";
import classes from "./TopicActions.css";
import Button from "../../Utils/Button/Button";
import { Link } from "react-router-dom";
const TopicActions = (props) => {
  return (
    <Fragment>
      <div className={classes.Main}>
        <div className={classes.Heading}>Actions for Current Topic</div>
        <div className={classes.TopicActions}>
          <Button
            text="edit"
            clas={[
              "purplehover",
              "black",
              "medium",
              "vertical-small",
              "whiteBg",
            ]}
          />
          <Button
            text="delete"
            clas={["redhover", "black", "medium", "whiteBg"]}
          />
        </div>
      </div>
      <Link to={`/${props.id}/card/new`}>
        <div className={classes.New}>
          <span className={classes.Icon}>
            {/* <i class="bi bi-plus"></i> */}
            <i className="bi bi-file-text"></i>
          </span>
          <span>New Card</span>
        </div>
      </Link>
    </Fragment>
  );
};

export default TopicActions;
