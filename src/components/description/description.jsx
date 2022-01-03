import React from "react";
import "./description.css";
import Card from "./descriptionCards/card";

const Description = () => {
  return (
    <div className="description" id="description">
      <div className="intro">
        <center>
          <h2>Here are a list of companies we track!</h2>
        </center>
      </div>
      <center>
        <div className="companies">
          <Card symbol="tsla" className="card" value="tsla" />
          <Card symbol="gme" className="card" />
          <Card symbol="clov" className="card" />
        </div>
      </center>
    </div>
  );
};

export default Description;
