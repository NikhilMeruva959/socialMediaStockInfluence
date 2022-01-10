import React from "react";
import "./description.css";
import Card from "./descriptionCards/card";
import CryptoCard from "./cryptoCards/CryptoCard";
import Button from "@material-ui/core/Button";

const Description = () => {
  const [onCrypto, setOnCrypto] = React.useState(["contained", ""]);
  return (
    <div className="description" id="description">
      <div className="intro">
        <center>
          <h2>Available Stocks & crypto we track</h2>
          <Button
            variant={onCrypto[0]}
            color="primary"
            onClick={() => setOnCrypto(["contained", ""])}
          >
            Crypto
          </Button>
          <Button
            variant={onCrypto[1]}
            color="primary"
            onClick={() => setOnCrypto(["", "contained"])}
          >
            Stocks
          </Button>
        </center>
      </div>

      <div className="everything">
        {onCrypto[0] === "contained" && (
          <div className="crypto">
            <div className="all-cards">
              <CryptoCard
                name="axie-infinity"
                className="card"
                value="AxieInfinity"
              />
              <CryptoCard name="bitcoin" className="card" value="Bitcoin" />
              <CryptoCard
                name="binancecoin"
                className="card"
                value="BinanceCoin"
              />
              <CryptoCard name="cardano" className="card" value="Cardano" />
              <CryptoCard name="chainlink" className="card" value="Chainlink" />
              <CryptoCard name="dogecoin" className="card" value="Dogecoin" />
              <CryptoCard name="ethereum" className="card" value="Ethereum" />
              <CryptoCard name="polkadot" className="card" value="Polkadot" />
              <CryptoCard name="shiba-inu" className="card" value="Shibainu" />
              <CryptoCard name="solana" className="card" value="Solana" />
              <CryptoCard name="terra-luna" className="card" value="Terra" />
              <CryptoCard name="tezos" className="card" value="Tezos" />
            </div>
          </div>
        )}
        {onCrypto[1] === "contained" && (
          <div className="companies">
            <div className="all-cards">
              <Card symbol="amc" className="card" />
              <Card symbol="amd" className="card" />
              <Card symbol="aapl" className="card" />
              <Card symbol="clov" className="card" />
              <Card symbol="gme" className="card" />
              <Card symbol="nvda" className="card" />
              <Card symbol="hood" className="card" />
              <Card symbol="ocgn" className="card" />
              <Card symbol="pltr" className="card" />
              <Card symbol="spy" className="card" />
              <Card symbol="tlry" className="card" />
              <Card symbol="tsla" className="card" value="tsla" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Description;
