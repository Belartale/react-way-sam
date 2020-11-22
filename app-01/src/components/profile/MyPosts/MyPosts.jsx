import React from "react";
import Post from "./post/Post";

const MyPosts = (props) => {
	console.log("MyPosts :>> ", props);
	return (
		<div className="block">
			<form className="block" action="">
				<textarea
					className="control"
					name=""
					id=""
					cols="30"
					rows="5"
				></textarea>
				<button className="control">
					<p className="caption--size_3">Отправить</p>
				</button>
			</form>
			<div>
				<Post postData={props.myPostsData} />
			</div>
		</div>
	);
};

export default MyPosts;
