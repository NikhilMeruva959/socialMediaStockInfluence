import { Route, BrowserRouter } from "react-router-dom";
import React, { Component } from "react";

import Home from "../components/home/home";
import Trending from "../components/Trending/Trending.js";
import About from "../components/About/About";
import Header from "../components/header/header.js";
import Description from "../components/description/description";
import Stock from "../components/stockPage/stock.jsx";
import Crypto from "../components/CryptoPage/crypto.jsx";

import Footer from "../components/Footer/Footer.js";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/trending" component={Trending} />
        <Route path="/about" component={About} />
        <Route path="/description" component={Description} />
        <Route path="/information" component={Stock} />
        <Route path="/crypto" component={Crypto} />
        <Footer />
      </BrowserRouter>
    );
  }
}
