import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setUsersTotalCountAC,
  toggleIsFetchingAC,
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";

//mUI
// import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

//!!!!!!!!!!!!!!!

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }

  onChangePage = (page) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  buttonUnFollow = (u) => {
    return u.followed ? (
      <button
        onClick={() => {
          this.props.unfollow(u.id);
        }}
      >
        Unfollowed
      </button>
    ) : (
      <button
        onClick={() => {
          this.props.follow(u.id);
        }}
      >
        Followed
      </button>
    );
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <CircularProgress /> : null}

        <Users
          onChangePage={this.onChangePage}
          buttonUnFollow={this.buttonUnFollow}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          setUsers={this.props.setUsers}
          setCurrentPage={this.props.setCurrentPage}
          setUsersTotalCount={this.props.setUsersTotalCount}
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
        />
      </>
    );
  }
}

const mapStateProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (usersId) => {
      dispatch(followAC(usersId));
    },
    unfollow: (usersId) => {
      dispatch(unfollowAC(usersId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
    setUsersTotalCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};

const UsersContainer = connect(
  mapStateProps,
  mapDispatchToProps
)(UsersAPIComponent);

export default UsersContainer;
