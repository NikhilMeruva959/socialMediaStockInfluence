import React from "react";
import "./stock.css";
import { fetchTweets } from "../../api/index.js";

const Stock = (props) => {
  let stockSymbol = props.location.state.symbol;

  const data = {
    tsla: ["Elon Musk", "Tesla"],
    aapl: ["Tim Cook", "Apple"],
  };

  const gettingTweets = async () => {
    let array = data[stockSymbol];
    for (let i = 0; i < array.length; i++) {
      let { data } = await fetchTweets(array[i]);
      console.log(data);
    }
  };

  gettingTweets();

  return (
    <div className="stock" id="stock">
      <div className="left">
        <div className="stock-info">
          <center>
            <div className="stock-name">
              <h1 className="stock-info2">{props.location.state.name}</h1>
              <img
                className="stock-info2"
                src={props.location.state.image}
                alt=""
              ></img>
              <h3>Current CEO : {props.location.state.info.CEO}</h3>
              <div className="desc">
                <p>{props.location.state.info.description}</p>
              </div>
            </div>
          </center>
        </div>
      </div>

      <div className="right">
        <div className="tweets">
          <h2>{gettingTweets}</h2>
        </div>
      </div>
    </div>
  );
};

export default Stock;
