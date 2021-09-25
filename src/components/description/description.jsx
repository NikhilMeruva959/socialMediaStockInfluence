import React from "react";
import "./description.css";
import Card from "./descriptionCards/card";
import { useHistory } from "react-router-dom";
import { Row, Col } from "react-simple-flex-grid";

const Description = () => {
  const history = useHistory();

  const clickedElement = (e) => {
    console.log("hello");
    console.log(e);
    /*history.push({
      pathnae: "/information",
      state: {
        symbol: "",
      },
    });*/
  };

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
          <Card symbol="nke" className="card" />
          <Card symbol="aapl" className="card" />
          <Card symbol="dis" className="card" />
          <Card symbol="amd" className="card" />
          <Card symbol="bhp" className="card" />
        </div>
      </center>
    </div>
  );
};

export default Description;
