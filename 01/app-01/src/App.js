import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
//jsx

const App = () => {
	return (
		<div className="wrapper-grid">
			<Header />
			<Nav />
			<Profile />
		</div>
	);
};

const Footer = () => {
	return (
		<main>
			<p>foter111</p>
		</main>
	);
};

export default App;
