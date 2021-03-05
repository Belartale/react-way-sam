import React from "react";
// import logo from "./logo.svg";

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

import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";

import DialogsContainer from "./components/dialogs/DialogsContainer";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

import Profile from "./components/profile/Profile";

import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  let state = props.store.getState();

  return (
    <BrowserRouter>
      <div className="wrapper__page">
        <Header />
        <SideBar sideBar={state.sideBar} />
        <div className="wrapper__content wrapper__content--padding_sm">
          <Route
            path="/profile"
            render={() => (
              <Profile
                dispatch={props.dispatch}
                // store={props.store}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <DialogsContainer
              // dialogsPage={props.state.dialogsPage}
              // addMessage={props.addMessage}
              // updateNewMessageText={props.updateNewMessageText}
              // dispatch={props.dispatch}
              // store={props.store}
              />
            )}
          />
          <Route path="/news" render={News} />
          <Route path="/music" render={Music} />
          <Route path="/settings" render={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
