import React from "react";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  // let dialogsElements = props.dialogsData.map((data) => (
  // 	<li className="list__item">
  // 		<NavLink className="link" to={`/dialogs/${data.id}`}>
  // 			<p className="caption caption--size_3">{data.name}</p>
  // 		</NavLink>
  // 	</li>
  // ));
  // return <ul className="list">{dialogsElements}</ul>;

  return (
    <li className="list__item">
      <NavLink className="link" to={`/dialogs/${props.id}`}>
        <p className="caption caption--size_3">{props.name}</p>
      </NavLink>
    </li>
  );
};

export default DialogsItem;
