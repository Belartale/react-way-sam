import React from "react";
import * as axios from "axios";

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

  return (
    <div>
      {props.users.map((u) => {
        return (
          <div key={u.id} className="caption--size_3">
            {u.followed ? (
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
            )}
            <div>
              <img className="img img--sm " src={u.photos.small} alt="no img" />
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
