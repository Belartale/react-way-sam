import React from "react";
import DialogsItem from "./DialogsItem/DialogsItem";
import DialogsMessage from "./DialogsMessage/DialogsMessage";

const Dialogs = (props) => {
	return (
		<div className="block">
			<div className="row">
				<div className="cell cell--10">
					<DialogsItem dialogsData={props.dialogs.dialogsData} />
				</div>

				<div className="cell cell--85">
					<DialogsMessage messageData={props.dialogs.messageData} />
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
