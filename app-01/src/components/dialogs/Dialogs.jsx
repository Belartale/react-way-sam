import React from "react";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
	return (
		<div>
			<NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
		</div>
	);
};

const Message = (props) => {
	return <div className="">{props.message}</div>;
};

const Dialogs = () => {
	let dialogsData = [
		{ id: 1, name: "Artur" },
		{ id: 2, name: "lorem" },
	];

	let messageData = [
		{ id: 1, message: "Lorem, ipsum dolor." },
		{ id: 2, message: "Lorem ipsum dolor sit amet." },
	];

	return (
		<div className="block">
			<div className="row">
				<div className="cell cell--10">
					<DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
					<DialogsItem name={dialogsData[1].id} id={dialogsData[1].id} />
				</div>

				<div className="cell cell--85">
					<Message message={messageData[0].message} />
					<Message message={messageData[1].message} />
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
