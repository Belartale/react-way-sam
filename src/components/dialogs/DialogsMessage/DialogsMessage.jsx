import React from "react";

const DialogsMessage = (props) => {
  // let dialogsElements = props.messageData.map((data) => (
  // 	<p className="caption caption--size_3">{data.message}</p>
  // ));
  // return <div>{dialogsElements}</div>;

  return <p className="caption caption--size_3">{props.message}</p>;
};

export default DialogsMessage;
