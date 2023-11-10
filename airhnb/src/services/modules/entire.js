import dongRequest from "../request";

export const getEntireRoomList = (offset = 0, size = 20) => {
  return dongRequest.get({
    url: "entire/list",
    params: {
      offset,
      size,
    },
  });
};
