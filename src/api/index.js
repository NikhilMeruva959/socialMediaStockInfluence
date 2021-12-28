import axios from "axios";

const API = axios.create({
  baseURL: "https://stockinfluencer-backend.herokuapp.com/",
});

export const fetchTweets = async (param) => {
  console.log("getting tweets from api layer");
  return await API.get(`/twitter/userLookup/${param}`);
};

export const getStockHistoricalData = async (param) => {
  let jsondata = await API.get(`twitter/historicaldata/${param}`);
  jsondata = jsondata.data;
  let stockData = [];
  console.log(jsondata);
  for (let j = 0; j < jsondata.t.length; j++) {
    let subArray = [];
    subArray.push(jsondata.t[j] * 1000);
    subArray.push(jsondata.c[j]);
    stockData.push(subArray);
  }
  return stockData;
};

export const get24HourChange = async (stock, date) => {
  let currentDate = new Date();
  if (currentDate.getDate() === date.getDate()) return "n/a";
  let date2 = date;
  date2.setDate(date.getDate() + 1);
  date = Math.floor(date.getTime() / 1000);
  date2 = Math.floor(date2.getTime() / 1000);
  let price1 = await API.get(`twitter/24hrchange/${stock}/${date2}`);
  let price2 = await API.get(`twitter/24hrchange/${stock}/${date}`);
  console.log(price1);
};
