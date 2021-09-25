import React from "react";
import "./card.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Card = ({ symbol }) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        `https://cloud.iexapis.com/stable/stock/${symbol}/logo?token=sk_92243c3991344a2b957410a7d90fbca0`
      )
      .then((res) => {
        setImage(res.data.url);
      });
    axios
      .get(
        `https://cloud.iexapis.com/stable/stock/${symbol}/company?token=sk_92243c3991344a2b957410a7d90fbca0`
      )
      .then((res) => {
        setName(res.data.companyName);
      });
  }, []);

  const clickedCard = () => {
    history.push({
      pathnae: "/information",
      state: {
        symbol: symbol,
        name: name,
        image: image,
      },
    });
  };

  return (
    <div className="card" id="card" onClick={clickedCard}>
      <div>
        <h3>{name}</h3>
      </div>
      <img className="logo" src={image} alt="" />
    </div>
  );
};

export default Card;
