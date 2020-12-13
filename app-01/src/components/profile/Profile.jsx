import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div className="card">
			<ProfileInfo />
			<MyPosts
				profileData={props.profileData}
				addPost={props.store.addPost}
				updateNewPostText={props.store.updateNewPostText}
			/>
		</div>
	);
};

export default Profile;
