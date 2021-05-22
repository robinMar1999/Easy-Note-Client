import React, { Fragment } from "react";
import classes from "./TopicActions.css";
import Button from "../../Utils/Button/Button";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
const TopicActions = (props) => {
  const deleteHandler = () => {
    axios({
      url: `/topic/${props.id}`,
      method: "delete",
      headers: {
        Authorization: props.token,
      },
    })
      .then((res) => {
        let pathname = "/";
        if (props.del) {
          pathname = pathname + props.del;
        }
        props.history.push({ pathname: pathname });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <Fragment>
      <div className={classes.Main}>
        <div className={classes.Heading}>Actions for Current Topic</div>
        <div className={classes.TopicActions}>
          <Link to={`${props.id}/edit`}>
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
          </Link>
          <Button
            text="delete"
            clas={["redhover", "black", "medium", "whiteBg"]}
            clicked={deleteHandler}
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

export default withRouter(TopicActions);
