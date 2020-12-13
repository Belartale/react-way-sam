import React from "react";
import Nav from "./nav/Nav";
import Friends from "./friends/Friends";

const SideBar = (props) => {
	console.log("SideBar :>> ", props);
	return (
		<div className="side_bar block block--indents_md">
			<Nav />
			<Friends friends={props.sideBar.friends} />
		</div>
	);
};

export default SideBar;
