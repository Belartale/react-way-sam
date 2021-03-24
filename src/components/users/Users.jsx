import Avatar from "@material-ui/core/Avatar";
import React from "react";
// import * as axios from "axios";
import userImg from "../../img/svg_avatar.svg";

let Users = (props) => {
  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let index = 1; index <= 10; index++) {
    pages.push(index);
  }

  // let checkPhoto = (photo) => {
  //   if (photo === null) {
  //     return userImg;
  //   }
  // };

  let checkPhoto = (photo) => {
    if (photo === null) {
      return <Avatar />;
    } else {
      return <Avatar src={photo} />;
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
            {props.buttonUnFollow(u)}
            <div>
              {checkPhoto(u.photos.small)}
              {/* <img
                className="img img--sm "
                src={checkPhoto(u.photos.small)}
                alt="avatar"
              /> */}
            </div>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </div>
        );
      })}
    </div>
  );
};

// class Users extends React.Component {
//   componentDidMount() {
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
//       )
//       .then((response) => {
//         this.props.setUsers(response.data.items);
//       });
//   }

//   onChangePage = (page) => {
//     this.props.setCurrentPage(page);
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
//       )
//       .then((response) => {
//         this.props.setUsers(response.data.items);
//         this.props.setUsersTotalCount(response.data.totalCount);
//       });
//   };

//   buttonUnFollow = (u) => {
//     return u.followed ? (
//       <button
//         onClick={() => {
//           this.props.unfollow(u.id);
//         }}
//       >
//         Unfollowed
//       </button>
//     ) : (
//       <button
//         onClick={() => {
//           this.props.follow(u.id);
//         }}
//       >
//         Followed
//       </button>
//     );
//   };

//   render() {
//     let pagesCount = Math.ceil(
//       this.props.totalUsersCount / this.props.pageSize
//     );
//     let pages = [];

//     for (let index = 1; index <= 10; index++) {
//       pages.push(index);
//     }

//     return (
//       <div className="caption--size_2">
//         {pages.map((page) => {
//           return (
//             <span
//               className={
//                 this.props.currentPage === page &&
//                 "caption--size_1 caption--color_1"
//               }
//               onClick={() => {
//                 this.onChangePage(page);
//               }}
//             >
//               {` ${page} `}
//             </span>
//           );
//         })}

//         {this.props.users.map((u) => {
//           return (
//             <div key={u.id}>
//               {this.buttonUnFollow(u)}
//               <div>
//                 <img className="img img--sm " src={userImg} alt="no img" />
//               </div>
//               <div>{u.name}</div>
//               <div>{u.status}</div>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

export default Users;
