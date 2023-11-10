import { getEntireRoomList } from "@/services/modules/entire";
import * as actionTypes from "./constanst";

export const changeCurrentPageAction = (currentPage) => {
  return {
    type: actionTypes.ChANGE_CURRENT_PAGE,
    currentPage,
  };
};

export const changeRoomListAction = (roomList) => {
  return {
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList,
  };
};

export const changeTotalCountAction = (totalCount) => {
  return {
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount,
  };
};

export const changeIsLoadingAction = (isLoading) => {
  return {
    type: actionTypes.CHANGE_ISLANDING,
    isLoading,
  };
};

export const fetchGetEntireRoomListAction = (offset, size) => {
  return async (dispatch) => {
    dispatch(changeIsLoadingAction(true));
    const res = await getEntireRoomList(offset, size);
    dispatch(changeRoomListAction(res?.list));
    dispatch(changeTotalCountAction(res?.totalCount));
    dispatch(changeIsLoadingAction(false));
  };
};
