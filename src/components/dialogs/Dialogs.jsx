import React from "react";
import DialogsItem from "./DialogsItem/DialogsItem";
import DialogsMessage from "./DialogsMessage/DialogsMessage";
import {
  sendMessageActionCreator,
  updataMessageActionCreator,
} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
  let newDialogElement = React.createRef();

  let state = props.store.getState().dialogsPage;
  console.log(state);

  let onClick = (e) => {
    props.dispatch(sendMessageActionCreator());
  };
  let onChange = (e) => {
    let body = e.target.value;
    props.dispatch(updataMessageActionCreator(body));
  };

  return (
    <div className="block">
      <div className="row">
        <div className="cell cell--10">
          <DialogsItem dialogsData={props.dialogsPage.dialogsData} />
        </div>

        <div className="cell cell--85">
          <DialogsMessage messageData={props.dialogsPage.messageData} />
        </div>

        <div className="cell cell--100">
          <textarea
            ref={newDialogElement}
            className="control"
            name=""
            id=""
            cols="30"
            rows="10"
            value={props.dialogsPage.newMessageText}
            onChange={onChange}
          ></textarea>
          <button className="control" onClick={onClick}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
