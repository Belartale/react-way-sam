import React from "react";
import Nav from "./nav/Nav";
import Friends from "./friends/Friends";
import { Paper } from "@material-ui/core";

const SideBar = (props) => {
  let sideBar = " side_bar block block--indents_md";

  return (
    <Paper className={sideBar} elevation={3}>
      <div>
        <Nav />
        <div className="block block--list_scroll">
          <div className="row row--flex_nowrap">
            {props.sideBar.friends.map((data) => (
              <Friends key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default SideBar;
