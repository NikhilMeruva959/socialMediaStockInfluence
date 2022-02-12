import * as api from "../api";

// Action Creators
export const getTweets = (param) => async () => {
  console.log("uhh, hello here");
  try {
    console.log(param);
    const data = await api.fetchTweets(param);
  } catch (e) {
    console.log(e);
  }
};
