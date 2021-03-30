import { Avatar, CircularProgress } from "@material-ui/core";
import React from "react";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <CircularProgress />;
  } else {
    return (
      <div className="row">
        <div className="cell">
          <Avatar src={props.profile.photos.large} />
        </div>
      </div>
    );
  }
};
export default ProfileInfo;
