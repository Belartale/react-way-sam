import React from "react";
import Nav from "./nav/Nav";
import Friends from "./friends/Friends";

const SideBar = (props) => {
  return (
    <div className="side_bar block block--indents_md">
      <Nav />
      {/* <Friends friends={props.sideBar.friends} /> */}
      <div className="block block--list_scroll">
        <div className="row row--flex_nowrap">
          {props.sideBar.friends.map((data) => (
            <Friends key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
