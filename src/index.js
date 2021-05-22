import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";
// axios.defaults.baseURL = "https://robin-easy-note-server.herokuapp.com/api";
// axios.defaults.headers.Authorization =
// "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGE2NTZkNTM0YzkyYzJhODBjNWY1OTciLCJpYXQiOjE2MjE2MDQyNTZ9.zQ_0YAXzgF710bgA49ciT_zpPGAbVsECwuQvG7pmGO4";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (request) => {
    // console.log(request);
    return request;
  },
  (error) => {
    // console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
