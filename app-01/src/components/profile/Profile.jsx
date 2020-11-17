import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = () => {
	return (
		<div className="card">
			<ProfileInfo />
			<MyPosts />
		</div>
	);
};

export default Profile;
