import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
	console.log("Profile :>> ", props);
	return (
		<div className="card">
			<ProfileInfo />
			<MyPosts myPostsData={props.profileData.myPostsData} />
		</div>
	);
};

export default Profile;
