import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import store from "./redux/state";
import "./index.css";

let renderApp = (props) => {
	ReactDOM.render(
		<React.StrictMode>
			<App
				state={props}
				addPost={store.addPost.bind(store)}
				updateNewPostText={store.updateNewPostText.bind(store)}
				//
				addMessage={store.addMessage.bind(store)}
				updateNewMessageText={store.updateNewMessageText.bind(store)}
			/>
		</React.StrictMode>,
		document.getElementById("root")
	);
	serviceWorker.unregister();
};

// export default renderApp;

renderApp(store.getState(), store);

// subscribe
store.subscribe(renderApp);
