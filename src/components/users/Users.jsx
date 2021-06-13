import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
// import * as axios from "axios";

let Users = (props) => {
  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let index = 1; index <= 10; index++) {
    pages.push(index);
  }

  let checkPhoto = (params) => {
    if (params.photo == null) {
      return <Avatar />;
    } else {
      return <Avatar src={params.photo} />;
    }
  };

  return (
    <div className="caption--size_2">
      {pages.map((page) => {
        return (
          <span
            className={
              props.currentPage === page && "caption--size_1 caption--color_1"
            }
            onClick={() => {
              props.onChangePage(page);
            }}
          >
            {` ${page} `}
          </span>
        );
      })}

      {props.users.map((u) => {
        return (
          <div key={u.id}>
            {props.buttonFollowOrUnFollow(u)}
            <div>
              <NavLink to={`profile/${u.id}`}>
                {checkPhoto({ photo: u.photos.small, id: u.id })}
              </NavLink>
            </div>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
