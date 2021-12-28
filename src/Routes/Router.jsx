import { Route, BrowserRouter } from "react-router-dom";
import React, { Component } from "react";

import Home from "../components/home/home";
import Trending from "../components/Trending/Trending.js";
import About from "../components/About/About";
import Header from "../components/header/header";
import Description from "../components/description/description";
import Stock from "../components/stockPage/stock.jsx";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route path="/home" component={Home} />
        <Route path="/trending" component={Trending} />
        <Route path="/about" component={About} />
        <Route path="/description" component={Description} />
        <Route path="/information" component={Stock} />
      </BrowserRouter>
    );
  }
}
