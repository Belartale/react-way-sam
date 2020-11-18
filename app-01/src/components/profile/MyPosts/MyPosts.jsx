import React from "react";
import Post from "./post/Post";

const MyPosts = () => {
	let myPostsData = [
		{ id: 1, likes: 12, message: "Lorem, ipsum dolor." },
		{ id: 2, likes: 33, message: "Lorem ipsum dolor sit amet." },
	];

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
