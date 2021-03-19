import React from "react";
import * as axios from "axios";
import userImg from "../../img/svg_avatar.svg";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        console.log("responde", response.data.items);
        // debugger;
        this.props.setUsers(response.data.items);
      });
  }

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
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];

    for (let index = 1; index <= pagesCount; index++) {
      pages.push(index);
    }

    return (
      <div>
        {pages.map((page) => {
          return (
            <span
              className={this.props.currentPage === page && "caption--color_1"}
            >
              {" "}
              {page}{" "}
            </span>
          );
        })}
        {this.props.users.map((u) => {
          return (
            <div key={u.id} className="caption--size_3">
              {this.buttonUnFollow(u)}
              <div>
                <img className="img img--sm " src={userImg} alt="no img" />
              </div>
              <div>{u.name}</div>
              <div>{u.status}</div>
              {/* <div>{u.location.country}</div> */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
