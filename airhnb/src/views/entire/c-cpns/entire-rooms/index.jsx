import React from "react";
import PropTypes from "prop-types";
import { RoomsWrapper } from "./style";
import RoomItem from "@/components/room-item";
import { useNavigate } from "react-router-dom";

function EntireRooms(props) {
  // 跳转到详情页
  const id = 4444;
  const Navigate = useNavigate();
  function handleClick(event) {
    // event.preventDefault();
    console.log(id);
    Navigate(`/detail/${id}`);
  }
  return (
    <RoomsWrapper>
      <h2>{props.totalCount}处住所</h2>
      <div className="roomList">
        {props.roomList &&
          props.roomList.map((item) => {
            return (
              <RoomItem
                key={item.id}
                info={item}
                item_width={"20%"}
                isSipper={true}
                itemClick={() => handleClick(id)}
              />
            );
          })}
      </div>
      {props.isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  );
}

EntireRooms.propTypes = {
  roomList: PropTypes.array,
  totalCount: PropTypes.number,
  isLoading: PropTypes.bool,
};
export default EntireRooms;
