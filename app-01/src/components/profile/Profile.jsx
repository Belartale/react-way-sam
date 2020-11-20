import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div className="card">
			<ProfileInfo />
			<MyPosts myPostsData={props.myPostsData} />
		</div>
	);
};

export default Profile;
