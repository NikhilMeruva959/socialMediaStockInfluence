import React from "react";
import "./trendingCards.css";
import { useState } from "react";
  
  const TrendingCards = ({ title }) => {
    const [image, setImage] = useState("");
  
    return (
      <div className="card" id="card">
        <div>{title}</div>
        <img src="" alt="" />
      </div>
    );
  };

export default TrendingCards;