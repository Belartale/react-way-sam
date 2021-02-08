import * as serviceWorker from "./serviceWorker";
import store from "./redux/reduxStore";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

let renderApp = (props) => {
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
};

renderApp(store.getState(), store);

// subscribe
store.subscribe(() => {
  // let state = store.getState();
  renderApp();
});
