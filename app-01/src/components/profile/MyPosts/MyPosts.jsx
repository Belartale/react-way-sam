import React from "react";
import Post from "./post/Post";

const MyPosts = (props) => {
	let newPostElement = React.createRef();

	let addPost = (e) => {
		e.preventDefault();
		// props.addPost();
		props.dispatch({ type: "ADD-POST" });
	};

	let onChange = () => {
		let text = newPostElement.current.value;
		// props.updateNewPostText(text);
		props.dispatch({ type: "UPDATE-POST", textPost: text });
	};

	return (
		<div className="block">
			<form className="block" action="">
				<textarea
					className="control"
					name=""
					id=""
					cols="30"
					rows="5"
					value={props.profileData.newPostText}
					ref={newPostElement}
					onChange={onChange}
				/>
				<button className="control" onClick={addPost}>
					<p className="caption--size_3">Отправить</p>
				</button>
			</form>
			<div>
				<Post postData={props.profileData.posts} />
			</div>
		</div>
	);
};

export default MyPosts;
