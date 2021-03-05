import React from "react";
import DialogsItem from "./DialogsItem/DialogsItem";
import DialogsMessage from "./DialogsMessage/DialogsMessage";

const Dialogs = (props) => {
  let newDialogElement = React.createRef();

  let onChange = (e) => {
    // let text = e.target.value;
    let text = newDialogElement.current.value;
    props.updateNewMessageText(text);
    console.log("ONEE");
  };

  return (
    <div className="block">
      <div className="row">
        <div className="cell cell--10">
          <DialogsItem dialogsData={props.state.dialogsPage.dialogsData} />
        </div>

        <div className="cell cell--85">
          <DialogsMessage messageData={props.state.dialogsPage.messageData} />
        </div>

        <div className="cell cell--100">
          <textarea
            ref={newDialogElement}
            className="control"
            name=""
            id=""
            cols="30"
            rows="10"
            value={props.state.dialogsPage.newMessageText}
            onChange={onChange}
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
