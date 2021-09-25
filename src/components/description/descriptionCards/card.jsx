import React from "react";
import "./card.css";
import { useState } from "react";

const Card = ({ title }) => {
  const [image, setImage] = useState("");

  return (
    <div className="card" id="card">
      <div>{title}</div>
      <img src="" alt="" />
    </div>
  );
};

export default Card;
