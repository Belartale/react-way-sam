import React from "react";

const Users = (props) => {
  if (props.users == false) {
    props.setUsers([
      {
        id: 1,
        followed: true,
        firstName: "Artur",
        status: "Lorem asdas asd asd a",
        location: { country: "Ukraine", city: "Kiev" },
        photo: "https://svgsilh.com/svg/2098873.svg",
      },
      {
        id: 2,
        followed: false,
        firstName: "Artem",
        status: "ASD ASD ASD AD FASDFKJ",
        location: { country: "Ukraine", city: "Odessa" },
        photo: "https://svgsilh.com/svg/2098873.svg",
      },
      {
        id: 3,
        followed: false,
        firstName: "Artem",
        status: "ASD ASD ASD AD FASDFKJ",
        location: { country: "Ukraine", city: "Odessa" },
        photo: "https://svgsilh.com/svg/2098873.svg",
      },
    ]);
  }

  setTimeout(() => {
    console.log("props :>> ", props);
  }, 10);

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
              <img className="img img--sm " src={u.photo} alt="adsad" />
            </div>
            <div>{u.firstName}</div>
            <div>{u.status}</div>
            {/* <div>{u.location.country}</div> */}
          </div>
        );
      })}
    </div>
  );
};

export default Users;
