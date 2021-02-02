import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className="card">
      <ProfileInfo />
      <MyPostsContainer
        profilePage={props.profilePage}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
