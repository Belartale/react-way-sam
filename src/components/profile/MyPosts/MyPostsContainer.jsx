// import React from "react";
import { connect } from "react-redux";
import {
  addTextActionCreator,
  updateTextActionCreator,
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
      dispatch(updateTextActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
