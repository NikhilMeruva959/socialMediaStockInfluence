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
  const [latestDate, setLatestDate] = React.useState("");

  // twitter username queries that will be looked up.
  // need to reformat table where tweets are displayed
  const data = {
    tsla: ["elonmusk", "tesla"],
    aapl: ["tim_cook"],
    gme: ["GameStop"],
    clov: ["CloverHealth"],
    hood: ["RobinhoodApp"],
    amc: ["AMCTheatres"],
    spy: ["StateStreetGA"],
    nvda: ["nvidia"],
  };

  const queries = {
    tsla: ["tesla", "elon musk"],
    aapl: ["tim cook", "apple"],
    gme: ["GameStop"],
    clov: ["Clover Health"],
    hood: ["Robinhood"],
    amc: ["amc"],
    spy: ["State Street Global Advisors"],
    nvda: ["NVIDIA"],
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
    let unixTimeL = result[result.length - 1][0];
    let latestDate = new Date(unixTimeL);
    setLatestDate(latestDate.toString());
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
                <div></div>
                <h1 className="stock-info2">{props.location.state.name}</h1>
                <img
                  className="stock-image"
                  src={props.location.state.image}
                  alt=""
                ></img>
                {props.location.state.info.CEO !== "" && (
                  <h3>Current CEO : {props.location.state.info.CEO}</h3>
                )}

                <div className="desc">
                  <p>{props.location.state.info.description}</p>
                </div>

                <div className="stock-info-info">
                  <h3>
                    Latest Stock Information from{" "}
                    {props.location.state.stockInfo.latestTime}
                  </h3>
                  <h6>
                    Current Price :{" "}
                    {props.location.state.stockInfo.iexRealtimePrice +
                      " (" +
                      props.location.state.stockInfo.changePercent +
                      "%)"}
                  </h6>
                  <h6>
                    Previous Close :{" "}
                    {props.location.state.stockInfo.previousClose}
                  </h6>
                  <h6>
                    52 Week Low - High : [
                    {props.location.state.stockInfo.week52Low} ,{" "}
                    {props.location.state.stockInfo.week52High}]
                  </h6>
                </div>
              </div>
            </center>
          </div>
        </div>

        <div className="right">
          <div className="tweets">
            {tweets.length === 0 ? (
              <h2>Loading Tweets ...</h2>
            ) : (
              <div>
                {tweets.map((table) => (
                  <div className="table-with-title">
                    <a
                      href={"https://twitter.com/" + data[stockSymbol][k]}
                      target="_blank"
                    >
                      <h3 className="table-title">@{data[stockSymbol][k++]}</h3>
                    </a>

                    <table className="tweets-table">
                      <thead>
                        <th className="tweet">Tweets</th>
                        <th className="time">Time</th>
                        <th className="short-change">1 HR Change</th>
                        <th className="long-change">24 HR Change</th>
                      </thead>
                      <tbody>
                        {table.map((tweet) => (
                          <tr className="tweets-row">
                            <td>
                              <a
                                href={links[linkIterator++]}
                                target="_blank"
                                className="tweet"
                              >
                                {tweet[0]}
                              </a>
                            </td>
                            <td className="time">{tweet[1]}</td>

                            {oneHourChange[++oneIterator] === "n/a" && (
                              <td className="short-change">-</td>
                            )}
                            {oneHourChange[oneIterator] > 0 && (
                              <td className="green short-change">
                                {oneHourChange[oneIterator]}%
                              </td>
                            )}
                            {oneHourChange[oneIterator] < 0 && (
                              <td className="red short-change">
                                {oneHourChange[oneIterator]}%
                              </td>
                            )}

                            {LongTermChange[++longTermIterator] === "n/a" && (
                              <td className="long-change">-</td>
                            )}
                            {LongTermChange[longTermIterator] > 0 && (
                              <td className="green long-change">
                                {LongTermChange[longTermIterator]}%
                              </td>
                            )}
                            {LongTermChange[longTermIterator] < 0 && (
                              <td className="red long-change">
                                {LongTermChange[longTermIterator]}%
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}

                {popularTweets.length > 0 && (
                  <div className="table-with-title">
                    <h3 className="table-title">
                      Popular Tweets & Recent News
                    </h3>
                    <table className="tweets-table">
                      <thead>
                        <th className="tweet">Tweets</th>
                        <th className="time">Time</th>
                        <th className="short-change">1 HR Change</th>
                        <th className="long-change">24 HR Change</th>
                      </thead>
                      <tbody>
                        {popularTweets.map((tweet) => (
                          <tr className="tweets-row">
                            <a
                              href={tweet[2]}
                              target="_blank"
                              className="tweet"
                            >
                              {tweet[0]}
                            </a>
                            <td className="time">{tweet[1]}</td>
                            {pOneHourChange[++onePIterator] === "n/a" && (
                              <td className="short-change">-</td>
                            )}
                            {pOneHourChange[onePIterator] > 0 && (
                              <td className="green short-change">
                                {pOneHourChange[onePIterator]}%
                              </td>
                            )}
                            {pOneHourChange[onePIterator] < 0 && (
                              <td className="red short-change">
                                {pOneHourChange[onePIterator]}%
                              </td>
                            )}

                            {pLongTermChange[++longPIterator] === "n/a" && (
                              <td className="long-change">-</td>
                            )}
                            {pLongTermChange[longPIterator] > 0 && (
                              <td className="green long-change">
                                {pLongTermChange[longPIterator]}%
                              </td>
                            )}
                            {pLongTermChange[longPIterator] < 0 && (
                              <td className="red long-change">
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
          <div className="last-updated">
            <p>Stock Change Information Reflect From {latestDate}</p>
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
