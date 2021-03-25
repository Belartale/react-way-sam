import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

import { setUserProfile } from "../../redux/profileReducer";

const Profile = (props) => {
  return (
    <div className="card">
      <ProfileInfo />
      <MyPostsContainer
        profilePage={props.profilePage}
        dispatch={props.dispatch}
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
        debugger;
        // this.props.toggleIsFetching(false);
        this.props.setUserProfile(response.data);
        // this.props.setUsersTotalCount(response.data.totalCount);
      });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({ a: 3 });

const mapDispatchToProps = {
  setUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
