import React from "react";
import DialogsItem from "./DialogsItem/DialogsItem";
import DialogsMessage from "./DialogsMessage/DialogsMessage";

const Dialogs = (props) => {
  let newDialogElement = React.createRef();

  return (
    <div className="block">
      <div className="row">
        <div className="cell cell--10">
          <DialogsItem dialogsData={props.state.dialogsData} />
        </div>

        <div className="cell cell--85">
          <DialogsMessage messageData={props.state.messageData} />
        </div>

        <div className="cell cell--100">
          <textarea
            ref={newDialogElement}
            className="control"
            name=""
            id=""
            cols="30"
            rows="10"
            value={props.state.newMessageText}
            onChange={props.onChange}
          ></textarea>
          <button className="control" onClick={props.onClick}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
