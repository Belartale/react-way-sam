import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
	console.log("Profile :>> ", props);
	return (
		<div className="card">
			<ProfileInfo />
			<MyPosts
				newPostText={props.profileData.newPostText}
				posts={props.profileData.posts}
				addPost={props.addPost}
				updateNewPostText={props.updateNewPostText}
			/>
		</div>
	);
};

export default Profile;
