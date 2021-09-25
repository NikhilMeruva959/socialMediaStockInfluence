import React from "react";
import "./description.css";
import Card from "./descriptionCards/card";
import { Row, Col } from "react-simple-flex-grid";

const description = () => {
  return (
    <div className="description" id="description">
      <div className="intro">
        <center>
          <h2>Here are a list of companies we track!</h2>
        </center>
      </div>
      <center>
        <div className="companies">
          <Card title="tsla" className="card" />
          <Card title="tsla" className="card" />
          <Card title="tsla" className="card" />
          <Card title="tsla" className="card" />
          <Card title="tsla" className="card" />
          <Card title="tsla" className="card" />
        </div>
      </center>
    </div>
  );
};

export default description;
