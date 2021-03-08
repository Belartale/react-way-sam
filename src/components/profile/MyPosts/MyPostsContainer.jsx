// import React from "react";
import { connect } from "react-redux";
import {
  addTextActionCreator,
  updataTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const mapStateProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (e) => {
      e.preventDefault();
      dispatch(addTextActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updataTextActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
