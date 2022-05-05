import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import AppComponent from "./components/AppComponent";
import allReducer from "./reducers";

ReactDOM.render(
  <Provider store={createStore(allReducer)}>
    <AppComponent />
  </Provider>,
  document.querySelector("#root")
);
