import React from "react";
import { connect } from "react-redux";
import {
  addTextActionCreator,
  updataTextActionCreator,
} from "../../../redux/profileReducer";

import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
//   let state = props.store.getState();

//   let dispatchAction = (e) => {
//     props.dispatch(addTextActionCreator());
//   };

//   let updateNewPostText = (text) => {
//     props.dispatch(updataTextActionCreator(text));
//   };

//   return (
//     <MyPosts
//       profilePage={state.profilePage}
//       dispatchAction={dispatchAction}
//       updateNewPostText={updateNewPostText}
//     />
//   );
// };

const mapStateProps = (store) => {
  return {
    profilePage: store.getState().profilePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    dispatchAction: (e) => {
      dispatch(addTextActionCreator());
    },

    updateNewPostText: (text) => {
      dispatch(updataTextActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
