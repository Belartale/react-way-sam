import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

import { setUserProfile } from "../../redux/profileReducer";

const Profile = (props) => {
  console.log("Profile :>> ", props);
  return (
    <div className="card">
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer
      // profilePage={props.profilePage}
      // dispatch={props.dispatch}
      // store={props.store}
      />
    </div>
  );
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        let realData = response.data;
        this.props.setUserProfile(realData);
        // this.props.toggleIsFetching(false);
        // this.props.setUsersTotalCount(response.data.totalCount);
        // this.render();
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
