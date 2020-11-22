import React from "react";

const Friends = (props) => {
	let createElement = props.friends.map((data) => (
		<div className="cell">
			<p className="caption caption--size_3">{data}</p>
		</div>
	));

	return (
		<div className="block block--list_scroll">
			<div className="row fn">{createElement}</div>
		</div>
	);
};

export default Friends;
