import React from "react";
// import logo from "./logo.svg";

import "../node_modules/normalize.css/normalize.css";
import "./App.css";
import "./components/css/row.css";
import "./components/css/cell.css";
import "./components/css/caption.css";
import "./components/css/img.css";

import Header from "./components/header/Header";

import Nav from "./components/navbar/Nav";
import Dialogs from "./components/dialogs/Dialogs";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

import Profile from "./components/profile/Profile";

import { BrowserRouter, Route } from "react-router-dom";
//jsx

const App = () => {
	return (
		<BrowserRouter>
			<div className="wrapper__grid_main">
				<Header />
				<Nav />
				<div className="content">
					<Route path="/profile" component={Profile} />
					<Route path="/dialogs" component={Dialogs} />
					<Route path="/news" component={News} />
					<Route path="/music" component={Music} />
					<Route path="/settings" component={Settings} />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
