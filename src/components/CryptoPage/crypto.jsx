import React, { useEffect } from "react";
import {
  getCryptoChartData,
  getPopularTweets,
  getHourChangeCrypto,
  get3HourChangeCrypto,
} from "../../api/index.js";
import Chart from "../Chart/chart.jsx";
import moment from "moment";
import "./crypto.css";

const Crypto = (props) => {
  const [stockData, setStockData] = React.useState("");
  const [popularTweets, setPopularTweets] = React.useState("");
  const [noAnalyzedTweet, setNoAnalyzedTweet] = React.useState("");
  const [latestDate, setLatestDate] = React.useState("");

  const api_name = {
    Bitcoin: "X:BTCUSD",
    Dogecoin: "X:DOGEUSD",
    Ethereum: "X:ETHUSD",
    Chainlink: "X:LINKUSD",
    Solana: "X:SOLUSD",
    Shibainu: "X:SHIBUSD",
    Cardano: "X:ADAUSD",
    Tezos: "X:XTZUSD",
    Polkadot: "X:DOTUSD",
    AxieInfinity: "X:AXSUSD",
    BinanceCoin: "X:BNBUSD",
    Terra: "X:LUNAUSD",
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
    try {
      let stockName = api_name[props.location.state.value];
      let query = [];

      query.push(props.location.state.info.name);

      let chart_data = await getCryptoChartData(stockName);
      setStockData(chart_data);
      let unixTimeL = chart_data[chart_data.length - 1][0];
      let latestDate = new Date(unixTimeL);
      setLatestDate(latestDate.toString());
      let popular_tweets = await getPopularTweets(query, 20);

      let analyzedTweet = [];
      let noAnalyzedTweet = [];
      for (let i = 0; i < popular_tweets.length; i++) {
        let popular_tweet = popular_tweets[i];
        let time = popular_tweet[3];
        popular_tweets[i][3] = moment(
          time,
          "dd MMM DD HH:mm:ss ZZ YYYY",
          "en"
        )._d;

        let response3 = await getHourChangeCrypto(popular_tweet[3], chart_data);
        let response4 = await get3HourChangeCrypto(
          popular_tweet[3],
          chart_data
        );
        popular_tweet.push(response3);
        popular_tweet.push(response4);

        if (response3 === "n/a") noAnalyzedTweet.push(popular_tweet);
        else analyzedTweet.push(popular_tweet);
        popular_tweets[i] = popular_tweet;
      }

      setPopularTweets(analyzedTweet);
      setNoAnalyzedTweet(noAnalyzedTweet);
    } catch (e) {}
  }, []);

  let onePIterator = -1;
  return (
    <div>
      <div className="stock" id="stock">
        <div className="left">
          <div className="stock-info">
            <center>
              <div className="stock-name">
                <div></div>
                <h1 className="stock-info2">
                  {props.location.state.info.name}
                </h1>
                <img
                  className="stock-image"
                  src={props.location.state.info.image}
                  alt=""
                ></img>

                <div className="stock-info-info">
                  <h6>
                    Latest Stock Information from {props.location.state.date}{" "}
                    minutes ago
                  </h6>
                  <h6>
                    Current Price : {props.location.state.info.current_price} (
                    {props.location.state.info.price_change_24h}%)
                  </h6>
                  <h6>
                    24 HR Low - High : [{props.location.state.info.low_24h} ,{" "}
                    {props.location.state.info.high_24h}]
                  </h6>
                  <h6>
                    Current Volume : {props.location.state.info.total_volume}
                  </h6>
                </div>
              </div>
            </center>
          </div>
        </div>

        <div className="right">
          <div className="tweets">
            {popularTweets.length === 0 ? (
              <h2>Loading Tweets ...</h2>
            ) : (
              <div>
                {popularTweets.length > 0 && (
                  <div className="table-with-title">
                    <h3 className="table-title">
                      Analyzed Tweets on {props.location.state.info.name}
                    </h3>
                    <table className="tweets-table">
                      <thead>
                        <th className="tweet">Tweets</th>
                        <th className="username-row">Username</th>
                        <th className="time">Time</th>
                        <th className="short-change">1 HR Change</th>
                        <th className="long-change">3 HR Change</th>
                      </thead>
                      <tbody>
                        {popularTweets.map((tweet) => (
                          <tr className="tweets-row-2">
                            <a
                              href={tweet[2]}
                              target="_blank"
                              className="tweet"
                            >
                              {tweet[0]}
                            </a>
                            <td className="username-row">
                              <a
                                href={"https://twitter.com/" + tweet[4]}
                                target="_blank"
                              >
                                @{tweet[4]}
                              </a>
                            </td>
                            <td className="time">{tweet[1]}</td>
                            {tweet[5] === "n/a" && (
                              <td className="short-change">-</td>
                            )}
                            {tweet[5] > 0 && (
                              <td className="green short-change">
                                {tweet[5]}%
                              </td>
                            )}
                            {tweet[5] < 0 && (
                              <td className="red long-change">{tweet[5]}%</td>
                            )}

                            {tweet[6] === "n/a" && (
                              <td className="long-change">-</td>
                            )}
                            {tweet[6] > 0 && (
                              <td className="green long-change">{tweet[6]}%</td>
                            )}
                            {tweet[6] < 0 && (
                              <td className="red long-change">{tweet[6]}%</td>
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
          <div>
            {noAnalyzedTweet.length > 0 && (
              <div className="table-with-title">
                <h3 className="table-title">
                  Latest Tweets & News on {props.location.state.info.name}
                </h3>
                <table className="tweets-table">
                  <thead>
                    <th className="tweet-2">Tweets</th>
                    <th className="username-row-2">Username</th>
                    <th className="time-2">Time</th>
                  </thead>
                  <tbody>
                    {noAnalyzedTweet.map((tweet) => (
                      <tr className="tweets-row-2">
                        <a href={tweet[2]} target="_blank" className="tweet">
                          {tweet[0]}
                        </a>
                        <td className="username-row">
                          <a
                            href={"https://twitter.com/" + tweet[4]}
                            target="_blank"
                          >
                            @{tweet[4]}
                          </a>
                        </td>
                        <td className="time">{tweet[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div className="last-updated">
            <p>Stock Change Information Reflect From {latestDate}</p>
          </div>
        </div>
      </div>
      <div className="stock-chart">
        <Chart stock={stockData} name={props.location.state.name} />
      </div>
    </div>
  );
};

export default Crypto;
