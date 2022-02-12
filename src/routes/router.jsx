import { Route, BrowserRouter } from "react-router-dom";
import React, { Component } from "react";
import Home from "../components/home/home.jsx";
import Login from "../components/login/login.jsx";
import Main from "../components/main/main.jsx";

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/main" component={Main} />
        </BrowserRouter>
      </div>
    );
  }
}
