import axios from "axios";

const API = axios.create({
  baseURL: "https://stockinfluencer-backend.herokuapp.com/",
});

export const fetchTweets = async (param) => {
  return await API.get(`/twitter/userLookup/${param}`);
};

export const getPopularTweets = async (queries) => {
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    let { data } = await API.get(`twitter/getPopularTweets/${queries[i]}`);

    for (let j = 0; j < data.statuses.length; j++) {
      let temp = [];
      temp.push(data.statuses[j].text);
      let date_split = data.statuses[j].created_at.split(" ");
      temp.push(date_split[1] + " " + date_split[2] + " " + date_split[3]);
      temp.push(
        "https://twitter.com/" +
          data.statuses[j].user.screen_name +
          "/status/" +
          data.statuses[j].id_str
      );
      temp.push(data.statuses[j].created_at);
      result.push(temp);
    }
  }
  return result;
};

export const getStockChartData = async (param) => {
  let { data } = await API.get(`twitter/chartdata/${param}`);
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

  console.log(date);
  console.log(datePlusOne);

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
