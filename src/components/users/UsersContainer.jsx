// import React from "react";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/usersReducer";
import Users from "./Users";

const mapStateProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (usersId) => {
      dispatch(followAC(usersId));
    },
    unfollow: (usersId) => {
      dispatch(unfollowAC(usersId));
    },
    setUsers: (usersId) => {
      dispatch(setUsersAC(usersId));
    },
  };
};

const UsersContainer = connect(mapStateProps, mapDispatchToProps)(Users);

export default UsersContainer;