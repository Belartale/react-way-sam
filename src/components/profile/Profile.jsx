import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className="card">
      <ProfileInfo />
      <MyPosts
        profilePage={props.profilePage}
        // addPost={props.addPost}
        // updateNewPostText={props.updateNewPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
