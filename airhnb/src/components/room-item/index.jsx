import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { RoomItemWrapper } from "./style";
import { Rate } from "antd";
import { Carousel } from "antd";
import Indicator from "@/base-ui/indicator";
import IconLeft from "@/assets/images/svg/icon_left";
import IconRight from "@/assets/images/svg/icon_right";
const RoomItem = memo((props) => {
  const { isSipper = false, itemClick } = props;
  // console.log(props);
  const [currentIndex, setIndex] = useState(0);
  const sliderRef = useRef();
  function handleClick(event, isNext) {
    // console.log("滑动", event);
    event.stopPropagation();
    const index = currentIndex;
    if (isNext) {
      sliderRef.current.next();
      setIndex((index + 1) % props.info?.picture_urls.length);
    } else {
      sliderRef.current.prev();
      setIndex(
        (index - 1 + props.info?.picture_urls.length) %
          props.info?.picture_urls.length
      );
    }
  }

  // 监听item点击
  function handleItemClick(event) {
    // console.log("item", event);
    event.stopPropagation();
    if (itemClick) itemClick();
  }
  return (
    <RoomItemWrapper
      color={props.info?.bottom_info?.content_color}
      fontSize={props.info?.bottom_info?.font_size}
      width={props.item_width}
      onClick={(event) => handleItemClick(event)}
    >
      {isSipper ? (
        <div className="cover-list">
          <div className="control">
            <div
              className="left"
              onClick={(event) => handleClick(event, false)}
            >
              <IconLeft size={{ width: "32px", height: "32px" }} />
            </div>
            <div
              className="right"
              onClick={(event) => handleClick(event, true)}
            >
              <IconRight size={{ width: "32px", height: "32px" }} />
            </div>
          </div>
          <Carousel dots={false} ref={sliderRef}>
            {props.info?.picture_urls.map((item, index) => (
              <div className="cover" key={index}>
                <img className="coverImg" src={item} alt="" />
              </div>
            ))}
          </Carousel>
          <div className="indicator">
            <Indicator
              selectedIndex={currentIndex}
              item_list={props.info?.picture_urls}
            />
          </div>
        </div>
      ) : (
        <div className="cover">
          <img className="coverImg" src={props.info?.picture_url} alt="" />
        </div>
      )}
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
  isSipper: PropTypes.bool,
  itemClick: PropTypes.func,
};

export default RoomItem;
