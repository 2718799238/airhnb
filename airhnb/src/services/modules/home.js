import dongRequest from "../request/index";

export function getHomeGoodPriceData() {
  return dongRequest.get({
    url: "/home/goodprice",
  });
}

export function getHomeHighScoreData() {
  return dongRequest.get({
    url: "/home/highscore",
  });
}
