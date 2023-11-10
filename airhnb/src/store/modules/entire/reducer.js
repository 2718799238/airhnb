import * as actionTypes from "./constanst";

const initialValue = {
  currentPage: 1, //当前页面
  roomList: [], //房间列表
  totalCount: 0, //数据总个数
  isLoading: false,
};

function reducer(state = initialValue, actions) {
  switch (actions.type) {
    case actionTypes.ChANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: actions.currentPage,
      };
    case actionTypes.CHANGE_ROOM_LIST:
      return {
        ...state,
        roomList: actions.roomList,
      };
    case actionTypes.CHANGE_TOTAL_COUNT:
      return {
        ...state,
        totalCount: actions.totalCount,
      };
    case actionTypes.CHANGE_ISLANDING:
      return {
        ...state,
        isLoading: actions.isLoading,
      };
    default:
      return state;
  }
}
export default reducer;
