import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomItemWrapper } from "./style";
import { Rate } from "antd";

const RoomItem = memo((props) => {
  // console.log(props);
  return (
    <RoomItemWrapper
      color={props.info?.bottom_info?.content_color}
      fontSize={props.info?.bottom_info?.font_size}
      width={props.item_width}
    >
      <div className="cover">
        <img className="coverImg" src={props.info?.picture_url} alt="" />
      </div>
      <div className="verify">
        <div className="msg">
          {props.info?.verify_info?.messages[0]}·
          {props.info?.verify_info?.messages[1]}
        </div>
        <div className="name">{props.info?.name}</div>
        <div className="price">￥{props.info?.price}/晚</div>
        <div className="rate">
          <Rate
            disabled
            defaultValue={5}
            style={{ color: "#1F5AC5", fontSize: "10px" }}
          />
          <span className="z">{props.info?.bottom_info?.content}</span>
        </div>
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  info: PropTypes.object,
  item_width: PropTypes.string,
};

export default RoomItem;
