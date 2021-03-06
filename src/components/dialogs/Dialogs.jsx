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
          {/* <DialogsItem dialogsData={props.state.dialogsPage.dialogsData} /> */}
          <ul className="list">
            {props.state.dialogsPage.dialogsData.map((d) => (
              <DialogsItem key={d.id} name={d.name} id={d.id} />
            ))}
          </ul>
        </div>

        <div className="cell cell--85">
          {/* <DialogsMessage messageData={props.state.dialogsPage.messageData} /> */}

          {props.state.dialogsPage.messageData.map((m) => (
            <DialogsMessage key={m.id} message={m.message} id={m.id} />
          ))}
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
          <button className="control" onClick={props.sendMessag}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
