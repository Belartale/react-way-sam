import "./index.css";

import state, { subscribe } from "./redux/state";
// import { addPost } from "./state/state";

// import renderApp from "./render";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
	addPost,
	updateNewPostText,
	addMessage,
	updateNewMessageText,
} from "./redux/state";

let renderApp = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App
				state={state}
				addPost={addPost}
				updateNewPostText={updateNewPostText}
				addMessage={addMessage}
				updateNewMessageText={updateNewMessageText}
			/>
		</React.StrictMode>,
		document.getElementById("root")
	);
	serviceWorker.unregister();
};

// export default renderApp;

renderApp(state);

// subscribe
subscribe(renderApp);
