import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import store from "./redux/state";
import "./index.css";

let renderApp = (store) => {
	ReactDOM.render(
		<React.StrictMode>
			<App store={store} />
		</React.StrictMode>,
		document.getElementById("root")
	);
	serviceWorker.unregister();
};

// export default renderApp;

renderApp(store);

// subscribe
store.subscribe(renderApp);
