import React from "react";
import DialogsItem from "./DialogsItem/DialogsItem";
import DialogsMessage from "./DialogsMessage/DialogsMessage";

const Dialogs = () => {
	let dialogsData = [
		{ id: 1, name: "Artur" },
		{ id: 2, name: "lorem" },
	];

	let messageData = [
		{ id: 1, message: "Lorem, ipsum dolor111." },
		{ id: 2, message: "Lorem ipsum dolor sit amet." },
	];

	return (
		<div className="block">
			<div className="row">
				<div className="cell cell--10">
					<DialogsItem dialogsData={dialogsData} />
				</div>

				<div className="cell cell--85">
					<DialogsMessage messageData={messageData} />
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
