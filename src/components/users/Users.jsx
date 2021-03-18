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

  // constructor(props) {
  //   super(props);
  //   axios
  //     .get("https://social-network.samuraijs.com/api/1.0/users")
  //     .then((response) => {
  //       console.log("responde", response.data.items);
  //       // debugger;
  //       this.props.setUsers(response.data.items);
  //     });
  // }
  // getUsers = () => {
  //   if (this.props.users.length === 0) {
  //     // https://social-network.samuraijs.com/docs#
  //     axios
  //       .get("https://social-network.samuraijs.com/api/1.0/users")
  //       .then((response) => {
  //         console.log("responde", response.data.items);
  //         // debugger;
  //         this.props.setUsers(response.data.items);
  //       });
  //   }
  // };

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
      <div>
        {/* <button onClick={this.getUsers}>get users</button> */}
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

// import React from "react";
// import * as axios from "axios";
// import userImg from "../../img/svg_avatar.svg";

// const Users = (props) => {
//   let getUsers = () => {
//     if (props.users.length === 0) {
//       // https://social-network.samuraijs.com/docs#
//       axios
//         .get("https://social-network.samuraijs.com/api/1.0/users")
//         .then((response) => {
//           console.log("responde", response.data.items);
//           // debugger;
//           props.setUsers(response.data.items);
//         });
//     }
//   };

//   let buttonUnFollow = (u) => {
//     return u.followed ? (
//       <button
//         onClick={() => {
//           props.unfollow(u.id);
//         }}
//       >
//         Unfollowed
//       </button>
//     ) : (
//       <button
//         onClick={() => {
//           props.follow(u.id);
//         }}
//       >
//         Followed
//       </button>
//     );
//   };

//   return (
//     <div>
//       <button onClick={getUsers}>get users</button>
//       {props.users.map((u) => {
//         return (
//           <div key={u.id} className="caption--size_3">
//             {buttonUnFollow(u)}
//             <div>
//               <img className="img img--sm " src={userImg} alt="no img" />
//             </div>
//             <div>{u.name}</div>
//             <div>{u.status}</div>
//             {/* <div>{u.location.country}</div> */}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Users;
