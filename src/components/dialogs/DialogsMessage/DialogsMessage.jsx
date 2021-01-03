import React from "react";

const DialogsMessage = (props) => {
	let dialogsElements = props.messageData.map((data) => (
		<p className="caption caption--size_3">{data.message}</p>
	));

	return <div>{dialogsElements}</div>;
};

export default DialogsMessage;
