import React, { useEffect } from "react";
import "./stock.css";
import {
  fetchTweets,
  getStockChartData,
  getHourChange,
  get24HourChange,
  getPopularTweets,
} from "../../api/index.js";
import Chart from "../Chart/chart.jsx";

const Stock = (props) => {
  let stockSymbol = props.location.state.symbol;
  const [tweets, setTweets] = React.useState("");
  const [stockData, setStockData] = React.useState("");
  const [oneHourChange, setOneHourChange] = React.useState("");
  const [LongTermChange, setLongTermChange] = React.useState("");
  const [links, setLinks] = React.useState("");
  const [popularTweets, setPopularTweets] = React.useState("");
  const [pOneHourChange, setPOneHourChange] = React.useState("");
  const [pLongTermChange, setPLongTermChange] = React.useState("");

  // twitter username queries that will be looked up.
  // need to reformat table where tweets are displayed
  const data = {
    tsla: ["elonmusk", "tesla"],
    aapl: ["tim_cook"],
    gme: ["GameStop"],
    clov: ["CloverHealth"],
  };

  const queries = {
    tsla: ["tesla", "elon musk"],
    aapl: ["tim cook"],
    gme: ["GameStop"],
    clov: ["Clover Health"],
  };

  const map = {
    Jan: "0",
    Feb: "1",
    Mar: "2",
    Apr: "3",
    May: "4",
    Jun: "5",
    Jul: "6",
    Aug: "7",
    Sep: "8",
    Oct: "9",
    Nov: "10",
    Dec: "11",
  };

  useEffect(async () => {
    let result = await getStockChartData(stockSymbol);
    setStockData(result);
    let array = data[stockSymbol];
    let tweets = [];
    let oneHChnage = [];
    let longTermC = [];
    let link = [];
    for (let i = 0; i < array.length; i++) {
      let temp2 = [];

      let { data } = await fetchTweets(array[i]);
      for (let j = 0; j < data.length; j++) {
        let temp = [];
        temp.push(data[j].text);
        // temp.push(data[j].created_at);
        link.push(
          "https://twitter.com/" + array[i] + "/status/" + data[j].id_str
        );

        let date_split = data[j].created_at.split(" ");
        temp.push(date_split[1] + " " + date_split[2] + " " + date_split[3]);
        let stockDate = new Date();
        stockDate.setFullYear(date_split[5]);
        stockDate.setMonth(map[date_split[1]]);
        stockDate.setDate(date_split[2]);
        let time_split = date_split[3].split(":");
        stockDate.setHours(time_split[0]);
        stockDate.setMinutes(time_split[1]);
        let response = await getHourChange(stockDate, result);
        oneHChnage.push(response);
        temp2.push(temp);
        let response2 = await get24HourChange(stockDate, result);
        longTermC.push(response2);
      }
      tweets.push(temp2);
    }
    let popularTweet = await getPopularTweets(queries[stockSymbol]);
    setPopularTweets(popularTweet);
    let pShortChange = [];
    let pLongChange = [];
    for (let k = 0; k < popularTweet.length; k++) {
      let date_split2 = popularTweet[k][3].split(" ");
      let stockDate2 = new Date();
      stockDate2.setFullYear(date_split2[5]);
      stockDate2.setMonth(map[date_split2[1]]);
      stockDate2.setDate(date_split2[2]);
      let time_split2 = date_split2[3].split(":");
      stockDate2.setHours(time_split2[0]);
      stockDate2.setMinutes(time_split2[1]);
      let response3 = await getHourChange(stockDate2, result);
      pShortChange.push(response3);

      let response4 = await get24HourChange(stockDate2, result);
      pLongChange.push(response4);
    }
    setPOneHourChange(pShortChange);
    setPLongTermChange(pLongChange);

    setTweets(tweets);
    setOneHourChange(oneHChnage);
    setLongTermChange(longTermC);
    setLinks(link);
  }, []);

  let k = 0;
  let oneIterator = -1;
  let longTermIterator = -1;
  let linkIterator = 0;
  let onePIterator = -1;
  let longPIterator = -1;
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
                            <td>
                              <a href={links[linkIterator++]} target="_blank">
                                {tweet[0]}
                              </a>
                            </td>
                            <td>{tweet[1]}</td>

                            {oneHourChange[++oneIterator] === "n/a" && (
                              <td>-</td>
                            )}
                            {oneHourChange[oneIterator] > 0 && (
                              <td className="green">
                                {oneHourChange[oneIterator]}%
                              </td>
                            )}
                            {oneHourChange[oneIterator] < 0 && (
                              <td className="red">
                                {oneHourChange[oneIterator]}%
                              </td>
                            )}

                            {LongTermChange[++longTermIterator] === "n/a" && (
                              <td>-</td>
                            )}
                            {LongTermChange[longTermIterator] > 0 && (
                              <td className="green">
                                {LongTermChange[longTermIterator]}%
                              </td>
                            )}
                            {LongTermChange[longTermIterator] < 0 && (
                              <td className="red">
                                {LongTermChange[longTermIterator]}%
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}

                {popularTweets.length === 0 ? (
                  <h1>No popular tweets right now</h1>
                ) : (
                  <div className="table-with-title">
                    <h3 className="table-title">Popular Tweets</h3>
                    <table className="tweets-table">
                      <thead>
                        <th>Tweets</th>
                        <th>Time</th>
                        <th>1 HR Change</th>
                        <th>24 HR Change</th>
                      </thead>
                      <tbody>
                        {popularTweets.map((tweet) => (
                          <tr className="tweets-row">
                            <a href={tweet[2]} target="_blank">
                              {tweet[0]}
                            </a>
                            <td>{tweet[1]}</td>
                            {pOneHourChange[++onePIterator] === "n/a" && (
                              <td>-</td>
                            )}
                            {pOneHourChange[onePIterator] > 0 && (
                              <td className="green">
                                {pOneHourChange[onePIterator]}%
                              </td>
                            )}
                            {pOneHourChange[onePIterator] < 0 && (
                              <td className="red">
                                {pOneHourChange[onePIterator]}%
                              </td>
                            )}

                            {pLongTermChange[++longPIterator] === "n/a" && (
                              <td>-</td>
                            )}
                            {pLongTermChange[longPIterator] > 0 && (
                              <td className="green">
                                {pLongTermChange[longPIterator]}%
                              </td>
                            )}
                            {pLongTermChange[longPIterator] < 0 && (
                              <td className="red">
                                {pLongTermChange[longPIterator]}%
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
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
