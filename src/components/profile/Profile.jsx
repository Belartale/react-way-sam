import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

import { setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";

const Profile = (props) => {
  return (
    <div className="card">
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 16222;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        let realData = response.data;
        this.props.setUserProfile(realData);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const mapDispatchToProps = {
  setUserProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileContainer));
