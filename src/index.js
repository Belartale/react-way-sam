import * as serviceWorker from "./serviceWorker";
import store from "./redux/reduxStore";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let renderApp = (props) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        // state={props.state}
        dispatch={store.dispatch.bind(store)}
        store={store}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
  serviceWorker.unregister();
};

renderApp(store.getState(), store);

// subscribe
store.subscribe(() => {
  // let state = store.getState();
  renderApp();
});
