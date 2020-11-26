import React from "react";

const Friends = (props) => {
	let createElement = props.friends.map((data) => (
		<div className="cell img--width_50">
			<img
				className="img img--sm img--radius "
				src="https://svgsilh.com/svg/2098873.svg"
				alt={`${data}`}
			/>
			<p className="caption caption--size_3">{data}</p>
		</div>
	));

	return (
		<div className="block block--list_scroll">
			<div className="row row--flex_nowrap">{createElement}</div>
		</div>
	);
};

export default Friends;
