import React, { memo, useEffect } from "react";
import { EntireWrapper } from "./style";
import EntireFilter from "./c-cpns/entire-filter";
import EntirePagination from "./c-cpns/entire-pagination";
import EntireRooms from "./c-cpns/entire-rooms";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  changeCurrentPageAction,
  fetchGetEntireRoomListAction,
} from "@/store/modules/entire/createActions";

const index = memo(() => {
  const dispatch = useDispatch();

  const size = 30;

  useEffect(() => {
    dispatch(fetchGetEntireRoomListAction(0, size));
  }, [dispatch]);
  const { roomList, totalCount, currentPage, isLoading } = useSelector(
    (state) => {
      return {
        currentPage: state.entire.currentPage,
        roomList: state.entire.roomList,
        totalCount: state.entire.totalCount,
        isLoading: state.entire.isLoading,
      };
    },
    shallowEqual
  );

  // 换页函数
  const changePage = (page, size) => {
    // 点击回到顶部
    window.scrollTo(0, 0);
    dispatch(changeCurrentPageAction(page));
    dispatch(fetchGetEntireRoomListAction((page - 1) * size, size));
  };
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms
        roomList={roomList}
        totalCount={totalCount}
        isLoading={isLoading}
      />
      <EntirePagination
        totalCount={totalCount}
        currentPage={currentPage}
        onChange={changePage}
      />
    </EntireWrapper>
  );
});

export default index;
