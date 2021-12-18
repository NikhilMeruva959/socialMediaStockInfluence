import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5001" });

export const fetchTweets = async (param) => {
  console.log("getting tweets from api layer");
  return await API.get(`/twitter/${param}`);
};
