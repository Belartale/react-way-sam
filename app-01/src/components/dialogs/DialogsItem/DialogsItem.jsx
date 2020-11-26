import React from "react";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
	let dialogsElements = props.dialogsData.map((data) => (
		<li className="list__item">
			<NavLink className="link" to={`/dialogs/${data.id}`}>
				<p className="caption caption--size_3">{data.name}</p>
			</NavLink>
		</li>
	));

	return <ul className="list">{dialogsElements}</ul>;
};

export default DialogsItem;
