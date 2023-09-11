import yeyuRequest from "..";

export function getHomeGoodPriceData() {
  return yeyuRequest.get({
    url: "/home/goodprice",
  });
}

export function getHomeHighScoreData() {
  return yeyuRequest.get({
    url: "/home/highscore",
  });
}

export function getHomeDiscountData() {
  return yeyuRequest.get({
    url: "/home/discount",
  });
}

export function getHomeHotRecommentData() {
  return yeyuRequest.get({
    url: "/home/hotrecommenddest",
  });
}
export function getHomeLongForData() {
  return yeyuRequest.get({
    url: "/home/longfor",
  });
}

export function getHomePlusData() {
  return yeyuRequest.get({
    url: "./home/plus",
  });
}
