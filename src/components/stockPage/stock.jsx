import React, { useState, useEffect } from "react";
import "./stock.css";
import {
  fetchTweets,
  getStockHistoricalData,
  get24HourChange,
} from "../../api/index.js";
import Chart from "../Chart/chart.jsx";

const Stock = (props) => {
  let stockSymbol = props.location.state.symbol;
  const [tweets, setTweets] = React.useState("");
  const [time, setTime] = React.useState("");
  const [stockData, setStockData] = React.useState("");

  // twitter username queries that will be looked up.
  // need to reformat table where tweets are displayed
  const data = {
    tsla: ["elonmusk", "tesla"],
    aapl: ["tim_cook"],
    gme: ["GameStop"],
    clov: ["CloverHealth"],
  };

  const map = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  useEffect(async () => {
    let result = await getStockHistoricalData(stockSymbol);
    setStockData(result);
    let array = data[stockSymbol];
    let tweets = [];
    for (let i = 0; i < array.length; i++) {
      let temp2 = [];
      let { data } = await fetchTweets(array[i]);
      for (let j = 0; j < data.length; j++) {
        let temp = [];
        temp.push(data[j].text);
        temp.push(data[j].created_at);
        temp2.push(temp);
        /*let date_split = data[j].created_at.split(" ");
        console.log(date_split);
        let stockDate = new Date(
          "" + date_split[5] + "-" + map[date_split[1]] + "-" + date_split[2]
        );
        get24HourChange(stockSymbol, stockDate);*/
      }
      tweets.push(temp2);
    }
    setTweets(tweets);
  }, []);
  let k = 0;

  return (
    <div>
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
          <div className="right">
            <div className="tweets"></div>
          </div>
        </div>

        <div className="right">
          <div className="tweets">
            {tweets.length === 0 ? (
              <h2>No Tweets generated right now</h2>
            ) : (
              <div>
                {tweets.map((table) => (
                  <div className="table-with-title">
                    <h3 className="table-title">@{data[stockSymbol][k++]}</h3>
                    <table className="tweets-table">
                      <thead>
                        <th>Tweets</th>
                        <th>Time</th>
                        <th>1 HR Change</th>
                        <th>24 HR Change</th>
                      </thead>
                      <tbody>
                        {table.map((tweet) => (
                          <tr className="tweets-row">
                            <td>{tweet[0]}</td>
                            <td>{tweet[1]}</td>
                            <td>1</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="stock-chart">
        <Chart stock={stockData} name={stockSymbol} />
      </div>
    </div>
  );
};

export default Stock;
