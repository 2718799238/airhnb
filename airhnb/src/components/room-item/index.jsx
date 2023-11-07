import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomItemWrapper } from "./style";
import { Rate } from "antd";

const RoomItem = memo((props) => {
  // console.log(props);
  return (
    <RoomItemWrapper
      text_color={props.info?.bottom_info?.content_color}
      fz={props.info?.bottom_info?.font_size}
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
};

export default RoomItem;
