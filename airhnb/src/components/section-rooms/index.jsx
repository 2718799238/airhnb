import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomWrapper } from "./style";
import RoomItem from "@/components/room-item";

const SectionRoom = memo((props) => {
  return (
    <RoomWrapper>
      {props.list?.slice(0, 8).map((item) => (
        <RoomItem
          key={item.id}
          info={item ? item : {}}
          item_width={props.item_width}
        />
      ))}
    </RoomWrapper>
  );
});

SectionRoom.propTypes = {
  list: PropTypes.array,
  item_width: PropTypes.string,
};

export default SectionRoom;
