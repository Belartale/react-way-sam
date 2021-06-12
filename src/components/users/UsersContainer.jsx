import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toggleIsFetching,
  toggleFollowingProgress,
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";

//mUI
// import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { userAPI } from "../../api/api";

//!!!!!!!!!!!!!!!

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    userAPI
      .getUsers({
        currentPage: this.props.currentPage,
        pageSize: this.props.pageSize,
      })
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setUsersTotalCount(data.totalCount);
      });
  }

  onChangePage = (page) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(page);
    userAPI
      .getUsers({
        currentPage: page,
        pageSize: this.props.pageSize,
      })
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  };

  buttonUnFollow = (u) => {
    return u.followed ? (
      <button
        onClick={() => {
          axios
            .delete(
              `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
              {
                withCredentials: true,
                headers: { "API-KEY": "7932c2b0-d1ab-490b-8f01-2f9e05b0b88d" },
              }
            )
            .then((response) => {
              if (response.data.resultCode === 0) {
                this.props.unfollow(u.id);
              }
            });
        }}
      >
        Unfollow
      </button>
    ) : (
      <button
        onClick={() => {
          axios
            .post(
              `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
              {},
              {
                withCredentials: true,
                headers: { "API-KEY": "7932c2b0-d1ab-490b-8f01-2f9e05b0b88d" },
              }
            )
            .then((response) => {
              if (response.data.resultCode === 0) {
                this.props.follow(u.id);
              }
            });
        }}
      >
        Follow
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

const mapDispatchToProps = {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toggleIsFetching,
  toggleFollowingProgress,
};

const UsersContainer = connect(
  mapStateProps,
  mapDispatchToProps
)(UsersAPIComponent);

export default UsersContainer;
