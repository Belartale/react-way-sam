import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageActionCreator,
  updataMessageActionCreator,
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";

let mapStateToProps = (store) => {
  return {
    state: store.dialogsPage,
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
