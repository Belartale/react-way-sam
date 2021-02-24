import * as serviceWorker from "./serviceWorker";
import store from "./redux/reduxStore";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        // state={props.state}
        dispatch={store.dispatch.bind(store)}
        store={store}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
