import React from "react";

const Users = (props) => {
  console.log("props :>> ", props);

  // let elementsUsers = (u) => {};

  return (
    <div>
      {props.users.map((u) => {
        return (
          <div key={u.id}>
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
              <img className="img img--sm img--radius" src={u.photo} alt="" />
            </div>
            <div>{u.firstName}</div>
            <div>{u.status}</div>
            <div>{u.location.country}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
