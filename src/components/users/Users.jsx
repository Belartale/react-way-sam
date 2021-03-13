import React from "react";
import * as axios from "axios";
import userImg from "../../img/svg_avatar.svg";

const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        console.log("responde", response.data.items);
        // debugger;
        props.setUsers(response.data.items);
      });
  }

  let buttonUnFollow = (u) => {
    return u.followed ? (
      <button
        onClick={() => {
          props.unfollow(u.id);
        }}
      >
        Unfollowed
      </button>
    ) : (
      <button
        onClick={() => {
          props.follow(u.id);
        }}
      >
        Followed
      </button>
    );
  };

  return (
    <div>
      {props.users.map((u) => {
        return (
          <div key={u.id} className="caption--size_3">
            {buttonUnFollow(u)}
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
};

export default Users;
