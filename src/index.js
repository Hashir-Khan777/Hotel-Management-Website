import React from "react";
import ReactDOM from "react-dom";
import HotelManagement from "./HotelManagement";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./store";

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <HotelManagement />
    </React.StrictMode>
  </Provider>,
  document.querySelector(".hotel_management")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
