// import React from "react";
import { connect } from "react-redux";
import {
  sendMessageActionCreator,
  updataMessageActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    state: state,
    // state: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(sendMessageActionCreator());
    },
    updateNewMessageText: (text) => {
      dispatch(updataMessageActionCreator(text));
      console.log("TWOO");
    },
    // onChange: (e) => {
    //   let body = e.target.value;
    //   dispatch(updataMessageActionCreator(body));
    // },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
