import React from "react";

const Post = (props) => {
	return (
		<div className="card">
			<div className="row row--align_center">
				<div className="cell cell--5">
					<img
						className="img img--sm img--radius"
						src="https://svgsilh.com/svg/2098873.svg"
						alt="img profiles"
					/>
				</div>
				<div className="cell cell--90">
					<p>{props.message}</p>
				</div>
			</div>
			<div className="row">
				<div className="cell cell--100">
					<p>like {props.likes}</p>
				</div>
			</div>
		</div>
	);
};

export default Post;
