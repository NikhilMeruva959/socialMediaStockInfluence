import React from "react";
import "./card.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Card = ({ symbol }) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [stockInfo, setStockInfo] = useState("");

  const url = process.env.IEX_API;

  const new_images = {
    hood:
      "https://media.glassdoor.com/sqll/1167765/robinhood-squarelogo-1589317275094.png",
    clov: "https://g.foolcdn.com/art/companylogos/square/clov.png",
    amc: "https://storage.googleapis.com/iexcloud-hl37opg/api/logos/AMC.png",
    amd: "https://storage.googleapis.com/iexcloud-hl37opg/api/logos/AMD.png",
    aapl: "https://storage.googleapis.com/iexcloud-hl37opg/api/logos/AAPL.png",
    gme: "https://storage.googleapis.com/iexcloud-hl37opg/api/logos/GME.png",
    nvda: "https://storage.googleapis.com/iexcloud-hl37opg/api/logos/NVDA.png",
    ocgn: "https://storage.googleapis.com/iexcloud-hl37opg/api/logos/OCGN.png",
    pltr: "https://storage.googleapis.com/iexcloud-hl37opg/api/logos/PLTR.png",
    spy: "https://storage.googleapis.com/iexcloud-hl37opg/api/logos/SPY.png",
    tlry: "https://storage.googleapis.com/iexcloud-hl37opg/api/logos/TLRY.png",
    tsla: "https://storage.googleapis.com/iexcloud-hl37opg/api/logos/TSLA.png",
  };

  const history = useHistory();

  useEffect(() => {
    setImage(new_images[symbol]);
    axios
      .get(
        `https://cloud.iexapis.com/stable/stock/${symbol}/company?token=pk_89f108d11b2e4190b8f9e11f0e2bc4c4`
      )
      .then((res) => {
        setName(res.data.companyName);
        setInfo(res.data);
      });
    axios
      .get(
        `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=pk_89f108d11b2e4190b8f9e11f0e2bc4c4`
      )
      .then((res) => {
        setStockInfo(res.data);
      });
  }, [symbol]);

  const clickedCard = () => {
    history.push({
      pathname: "/information",
      state: {
        symbol: symbol,
        name: name,
        image: image,
        info: info,
        stockInfo: stockInfo,
      },
    });
  };

  return (
    <div className="card" id="card" onClick={clickedCard}>
      <div>
        <h3 className="card-title">{name}</h3>
      </div>
      <img className="logo" src={image} alt="" />
    </div>
  );
};

export default Card;
