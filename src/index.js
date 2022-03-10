import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// 🥒js0309.router
import { BrowserRouter } from "react-router-dom";

//🥒js0310-0440. redux 
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
