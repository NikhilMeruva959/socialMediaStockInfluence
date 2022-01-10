import React from "react";
import "./CryptoCard.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const CryptoCard = ({ name, value }) => {
  const [image, setImage] = useState("");
  const [info, setInfo] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${name}`
      )
      .then((res) => {
        setImage(res.data[0].image);
        setInfo(res.data[0]);
        var tDate = new Date();

        //Convert timestamp in GMT/UTC format
        let utcDate = tDate.toUTCString();
        let ud_split = utcDate.split(" ");
        ud_split = ud_split[4].split(":");

        let last_updated = res.data[0].last_updated;
        let lu_split = last_updated.split(":");

        let num1 = parseInt(lu_split[1]);
        let num2 = parseInt(ud_split[1]);

        if (num2 >= num1) setDate(num2 - num1);
        else setDate(60 - num1 + num2);
      });
  }, [name]);

  const history = useHistory();

  const clickedCard = () => {
    history.push({
      pathname: "/crypto",
      state: {
        name: name,
        info: info,
        value: value,
        date: date,
      },
    });
  };
  return (
    <div className="card" id="card" onClick={clickedCard}>
      <div>
        <h3 className="card-title">{info.name}</h3>
      </div>
      <img className="logo" src={image} alt="" />
    </div>
  );
};

export default CryptoCard;
