import yeyuRequest from "..";
export function getEntireRoomListData(offset = 0, size = 20) {
  return yeyuRequest.get({
    url: "entire/list",
    params: {
      offset,
      size,
    },
  });
}
