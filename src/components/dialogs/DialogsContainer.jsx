// import React from "react";
import {
  sendMessageActionCreator,
  updataMessageActionCreator,
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(sendMessageActionCreator());
    },
    onChange: (e) => {
      let body = e.target.value;
      dispatch(updataMessageActionCreator(body));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
