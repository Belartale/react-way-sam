import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let myPostsData = [
	{ id: 1, likes: 12, message: "Lorem, ipsum dolor. I have 12 likes" },
	{
		id: 2,
		likes: 33,
		message: "Lorem ipsum dolor sit amet. And I have 33 likes too",
	},
];

let dialogsData = [
	{ id: 1, name: "Artur" },
	{ id: 2, name: "lorem" },
];

let messageData = [
	{ id: 1, message: "Lorem, ipsum dolor111." },
	{ id: 2, message: "Lorem ipsum dolor sit amet." },
];

ReactDOM.render(
	<React.StrictMode>
		<App
			myPostsData={myPostsData}
			dialogsData={dialogsData}
			messageData={messageData}
		/>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
