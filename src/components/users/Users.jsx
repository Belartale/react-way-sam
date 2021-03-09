import React from "react";



const Users = (props) => {
  console.log("props :>> ", props);



  let elementsUsers = (u) => {
    
  }

  return (
    <div>
      {props.users.map((u) => {
        return <div>{u.firstName}</div>;
      })}
    </div>
  );
};

export default Users;
