import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
	let myPostsData = [
		{ id: 1, likes: 12, message: "Lorem, ipsum dolor." },
		{ id: 2, likes: 33, message: "Lorem ipsum dolor sit amet." },
	];

	return (
		<div className="card">
			<ProfileInfo />
			<MyPosts myPostsData={myPostsData} />
		</div>
	);
};

export default Profile;
