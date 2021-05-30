import React from "react";

// css
import "../node_modules/normalize.css/normalize.css";
import "./App.css";
import "./components/css/row.css";
import "./components/css/cell.css";
import "./components/css/card.css";
import "./components/css/caption.css";
import "./components/css/img.css";
import "./components/css/control.css";
import "./components/css/link.css";
import "./components/css/list.css";
import "./components/css/block.css";
import "./components/css/nav.css";

import HeaderContainer from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";

import DialogsContainer from "./components/dialogs/DialogsContainer";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

import Profile from "./components/profile/Profile";
import UsersContainer from "./components/users/UsersContainer";

import { BrowserRouter, Route } from "react-router-dom";
import { Paper } from "@material-ui/core";

// import { Box, Button, Container } from "@material-ui/core";
// import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
const App = (props) => {
  let state = props.store.getState();

  return (
    <BrowserRouter>
      <div className="wrapper__page">
        <HeaderContainer />
        <SideBar className="side_bar" sideBar={state.sideBar} />
        <Paper
          className="wrapper__content wrapper__content--padding_sm"
          elevation={3}
        >
          <Route path="/profile/:userId?" render={() => <Profile />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" render={News} />
          <Route path="/music" render={Music} />
          <Route path="/settings" render={Settings} />
          <Route path="/users" render={() => <UsersContainer />} />
        </Paper>
      </div>
    </BrowserRouter>
  );
};

export default App;
