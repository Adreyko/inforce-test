import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router basename="/">
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
