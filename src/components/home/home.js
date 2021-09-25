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

            {/* <div className="companies">
              <TrendingCards title="TSLA" className="TrendingCards" />
              <TrendingCards title="tsla" className="TrendingCards" />
              <TrendingCards title="tsla" className="TrendingCards" />
              <TrendingCards title="tsla" className="TrendingCards" />
              <TrendingCards title="tsla" className="TrendingCards" />
              <TrendingCards title="tsla" className="TrendingCards" />
            </div>  */}

        </div>
    </body>
  );
};

export default home;
