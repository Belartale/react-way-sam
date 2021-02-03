import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageActionCreator,
  updataMessageActionCreator,
} from "../../redux/dialogsReducer";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onClick = (e) => {
    props.dispatch(sendMessageActionCreator());
  };
  let onChange = (e) => {
    let body = e.target.value;
    props.dispatch(updataMessageActionCreator(body));
  };

  return <Dialogs state={state} onClick={onClick} onChange={onChange} />;
};

export default DialogsContainer;
