import React from "react";
import "./home.css";
import TrendingCards from "./trendingCards/trendingCards";
import { Row, Col } from "react-simple-flex-grid";

const home = () => {
  return (
     <body>
        <div class="hero">
            <h2 className="subTitle">Tracking Stocks Susceptive to Media Influence</h2>
            <h4> Over the past year, many stocks have vastly changed due to various outlets of media. From the likes of Tesla and GameStop, new streams of influence has affected the financial sector and should be carefully anazlyzed</h4>

            <button type="button">Explore</button>

            {/* <div className="intro">
              <center>
                <h2>Here are a list of companies we track!</h2>
              </center>
            </div>
            <center>
              <div className="companies">
                <TrendingCards symbol="tsla" className="card" value="tsla" />
                <TrendingCards symbol="nke" className="card" />
                <TrendingCards symbol="aapl" className="card" />
                <TrendingCards symbol="dis" className="card" />
                <TrendingCards symbol="amd" className="card" />
                <TrendingCards symbol="bhp" className="card" />
              </div>
            </center> */}

        </div>
    </body>
  );
};

export default home;
