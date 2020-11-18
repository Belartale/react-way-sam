import React from "react";
import { NavLink } from "react-router-dom";

// const DialogsItem = (props) => {
// 	return (
// 		<div>
// 			<NavLink className="caption caption--size_3" to={`/dialogs/${props.id}`}>
// 				{props.name}
// 			</NavLink>
// 		</div>
// 	);
// };

// const Message = (props) => {
// 	return <p className="caption caption--size_3">{props.message}</p>;
// };

const Dialogs = () => {
	let dialogsData = [
		{ id: 1, name: "Artur" },
		{ id: 2, name: "lorem" },
	];

	let dialogsElements = dialogsData.map((name) => (
		<div>
			<NavLink className="caption caption--size_3" to={`/dialogs/${name.id}`}>
				{name.name}
			</NavLink>
		</div>
	));

	let messageData = [
		{ id: 1, message: "Lorem, ipsum dolor111." },
		{ id: 2, message: "Lorem ipsum dolor sit amet." },
	];

	let messagesElements = messageData.map((message) => (
		<p className="caption caption--size_3">{message.message}</p>
	));

	return (
		<div className="block">
			<div className="row">
				<div className="cell cell--10">
					{/* <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
					<DialogsItem name={dialogsData[1].id} id={dialogsData[1].id} /> */}
					{dialogsElements}
				</div>

				<div className="cell cell--85">
					{messagesElements}

					{/* <Message message={messageData[0].message} />
					<Message message={messageData[1].message} /> */}
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
