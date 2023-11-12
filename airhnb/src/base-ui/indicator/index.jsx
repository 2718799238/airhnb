import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { IndicatorWrapper } from "./style";

function Indicator(props) {
  const {
    item_list = [1, 2, 3, 4, 5, 6, 7],
    dot = true,
    selectedIndex = 0,
  } = props;
  const totalDistance = useRef();
  const contentRef = useRef();
  useEffect(() => {
    const scrollWidth = contentRef.current.scrollWidth; //滚动条总长度
    const clientWidth = contentRef.current.clientWidth; //滚动窗口大小
    totalDistance.current = scrollWidth - clientWidth; //可滚动距离
    // console.log("总距离：", totalDistance);

    console.log(selectedIndex);
    const newEl = contentRef.current.children[selectedIndex];

    const newElLeft = newEl.offsetLeft; //当前元素距离左边的距离
    let distance =
      newElLeft +
      newEl.clientWidth * 0.5 -
      contentRef.current.clientWidth * 0.5; //当前元素距离中心点的距离
    // console.log(selectedIndex, distance);
    if (distance < 0) distance = 0;
    if (distance > totalDistance.current) distance = totalDistance.current;
    contentRef.current.style.transform = `translateX(${-distance}px)`;
    console.log("刷新");
  }, [contentRef, selectedIndex]);

  return (
    <IndicatorWrapper>
      <div className="content" ref={contentRef}>
        {dot
          ? item_list.map((item, index) => {
              return (
                <div key={item} className="item">
                  <span
                    className={`dot ${selectedIndex === index ? "active" : ""}`}
                  />
                </div>
              );
            })
          : props.children}
      </div>
    </IndicatorWrapper>
  );
}

Indicator.propTypes = {
  item_list: PropTypes.array,
  dot: PropTypes.bool,
  selectedIndex: PropTypes.number,
};

export default Indicator;
