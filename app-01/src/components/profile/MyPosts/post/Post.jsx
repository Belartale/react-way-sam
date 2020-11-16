import React from "react";

const Post = (props) => {
	return (
		<div className="card">
			<div className="row row--align_center">
				<div className="cell">
					<img
						className="img img--sm img--radius"
						src="https://svgsilh.com/svg/2098873.svg"
						alt="img profiles"
					/>
				</div>
				<div className="cell">
					<p>{props.message}</p>
				</div>
			</div>
			<div className="row">
				<div className="cell">
					<p>like {props.likes}</p>
				</div>
			</div>
		</div>
	);
};

export default Post;
