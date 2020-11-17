import React from "react";
import Post from "./post/Post";

const MyPosts = () => {
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
				<button className="control">Отправить</button>
			</form>
			<Post
				message="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem "
				likes="12"
			/>
			<Post message="two" likes="1" />
			<Post />
		</div>
	);
};

export default MyPosts;
