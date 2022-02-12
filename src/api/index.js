import axios from "axios";
import moment from "moment";

const API = axios.create({
  baseURL: "https://stockinfluencer-backend.herokuapp.com/",
});

export const fetchTweets = async (param) => {
  return await API.get(`/twitter/userLookup/${param}`);
};

export const getPopularTweets = async (queries, count) => {
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    let { data } = await API.get(
      `twitter/getPopularTweets/${queries[i]}/${count}`
    );

    console.log(data);

    for (let j = 0; j < data.statuses.length; j++) {
      let temp = [];
      temp.push(data.statuses[j].text);
      let created_at = data.statuses[j].created_at;
      let date = moment(created_at, "dd MMM DD HH:mm:ss ZZ YYYY", "en")._d;
      let date_split = date.toString().split(" ");
      temp.push(date_split[1] + " " + date_split[2] + " " + date_split[4]);
      temp.push(
        "https://twitter.com/" +
          data.statuses[j].user.screen_name +
          "/status/" +
          data.statuses[j].id_str
      );
      temp.push(data.statuses[j].created_at);
      temp.push(data.statuses[j].user.screen_name);
      result.push(temp);
    }
  }
  return result;
};

export const getStockChartData = async (param) => {
  let { data } = await API.get(`twitter/chartdata/${param}`);
  console.log(data);
  let stockData = [];
  if (data.results !== "max results") {
    for (let j = 0; j < data.results.length; j++) {
      let subArray = [];
      subArray.push(data.results[j].t);
      subArray.push(data.results[j].c);
      stockData.push(subArray);
    }
  }

  return stockData;
};

export const get24HourChange = async (date, data) => {
  let datePlusOne = new Date(date.getTime());
  datePlusOne.setDate(date.getDate() + 1);

  let unixTime1 = date.getTime();
  let unixTime2 = datePlusOne.getTime();

  var price1 = 0;
  var price2 = "n/a";

  let passedOne = false;
  if (data.length !== 0) {
    for (let i = 0; i < data.length; i++) {
      if (!passedOne) {
        if (unixTime1 <= data[i][0]) {
          price1 = data[i][1];
          passedOne = true;
        }
      } else {
        if (unixTime2 <= data[i][0]) {
          price2 = data[i][1];
          break;
        }
      }
    }
    if (price2 === "n/a") return "n/a";
    else {
      let priceDifference = ((price2 - price1) / price1) * 100;
      console.log(priceDifference);
      return priceDifference.toFixed(2);
    }
  }
};

export const get3HourChangeCrypto = async (date, data) => {
  let unixTime = date.getTime();
  var price1 = 0;
  var price2 = "n/a";

  if (data.length !== 0) {
    for (let i = 0; i < data.length; i++) {
      if (unixTime <= data[i][0]) {
        if (i - 1 >= 0 && i + 11 < data.length) {
          price1 = data[i - 1][1];
          price2 = data[i + 11][1];
        }
        break;
      }
    }
  }

  if (price2 === "n/a") return "n/a";
  else {
    let priceDifference = ((price2 - price1) / price1) * 100;
    return priceDifference.toFixed(2);
  }
};

export const getHourChange = async (date, data) => {
  let unixTime = date.getTime();
  var price1 = 0;
  var price2 = "n/a";

  if (data.length !== 0) {
    for (let i = 0; i < data.length; i++) {
      if (unixTime <= data[i][0]) {
        price1 = data[i][1];
        if (i !== 0) {
          price2 = data[i - 1][1];
        }
        break;
      }
    }
  }

  if (price2 === "n/a") return "n/a";
  else {
    let priceDifference = ((price1 - price2) / price2) * 100;
    return priceDifference.toFixed(2);
  }
};

export const getHourChangeCrypto = async (date, data) => {
  let unixTime = date.getTime();
  var price1 = 0;
  var price2 = "n/a";

  if (data.length !== 0) {
    for (let i = 0; i < data.length; i++) {
      if (unixTime <= data[i][0]) {
        if (i - 1 >= 0 && i + 3 < data.length) {
          price1 = data[i - 1][1];
          price2 = data[i + 3][1];
          console.log(price1 + " " + price2);
        }
        break;
      }
    }
  }

  if (price2 === "n/a") return "n/a";
  else {
    let priceDifference = ((price2 - price1) / price1) * 100;
    return priceDifference.toFixed(2);
  }
};

export const getCryptoChartData = async (param) => {
  let { data } = await API.get(`twitter/chartdatacrypto/${param}`);
  console.log(data);
  let stockData = [];
  if (data.results !== "max results") {
    if (data.resultsCount !== 0) {
      for (let j = 0; j < data.results.length; j++) {
        let subArray = [];
        subArray.push(data.results[j].t);
        subArray.push(data.results[j].c);
        stockData.push(subArray);
      }
    }
  }

  return stockData;
};
