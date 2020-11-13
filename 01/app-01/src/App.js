import React from "react";
import logo from "./logo.svg";

import "../node_modules/normalize.css/normalize.css";
import "./App.css";
import "./components/css/row.css";
import "./components/css/cell.css";
import "./components/css/caption.css";
import "./components/css/img.css";

import Header from "./components/header/Header";
import Nav from "./components/navbar/Nav";
import Profile from "./components/profile/Profile";
import Dialogss from "./components/dialogs/Dialogs";
//jsx

const App = () => {
	return (
		<div className="wrapper__grid_main">
			<Header />
			<Nav />
			<Profile />
			{/* <Dialogss /> */}
		</div>
	);
};

export default App;
