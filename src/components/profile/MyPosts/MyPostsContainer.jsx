import React from "react";
// import Post from "./post/Post";
import {
  addTextActionCreator,
  updataTextActionCreator,
} from "../../../redux/profileReducer";

import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let dispatchAction = (e) => {
    props.dispatch(addTextActionCreator());
  };

  let updateNewPostText = (text) => {
    props.dispatch(updataTextActionCreator(text));
  };

  return (
    <MyPosts
      profilePage={props.profilePage}
      dispatchAction={dispatchAction}
      updateNewPostText={updateNewPostText}
    />
  );
};

export default MyPostsContainer;
