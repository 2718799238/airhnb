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

export function getHomeDiscountData() {
  return dongRequest.get({ url: "/home/discount" });
}

export function getHomeRecommendDest() {
  return dongRequest.get({ url: "/home/hotrecommenddest" });
}

export function getHomeLongFor() {
  return dongRequest.get({ url: "/home/longfor" });
}

export function getHomePlusData() {
  return dongRequest.get({
    url: "/home/plus",
  });
}
