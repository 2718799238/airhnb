import React, { useEffect, useRef, useState } from "react";

import { ViewWrapper } from "./style";
import IconLeft from "@/assets/images/svg/icon_left";
import IconRight from "@/assets/images/svg/icon_right";

function ScrollView(props) {
  // 组件渲染完毕。判断是否显示右侧按钮
  const [showRight, setShowRight] = useState();
  const [showLeft, setShowLeft] = useState();

  const totalDistance = useRef();

  const currentIndex = useRef(0);
  const scrollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; //一共可以滚动宽度
    const clientWidth = scrollContentRef.current.clientWidth; //本身占据的宽度
    // console.log(scrollWidth, clientWidth);
    totalDistance.current = scrollWidth - clientWidth; //可滚动距离

    setShowRight(totalDistance.current > 0);
  }, [props.children]);

  function rightClickHandle(isRight) {
    isRight ? currentIndex.current++ : currentIndex.current--;
    const newEl = scrollContentRef.current.children[currentIndex.current];
    if (isRight) {
      scrollContentRef.current.style.transform = `translate(-${newEl.offsetLeft}px)`;
    } else {
      scrollContentRef.current.style.transform = `translate(-${newEl.offsetLeft}px)`;
    }
    console.log(totalDistance, newEl.offsetLeft);

    setShowRight(totalDistance.current > newEl.offsetLeft);
    setShowLeft(newEl.offsetLeft > 0);
  }
  return (
    <ViewWrapper>
      {showLeft && (
        <button className="btn left" onClick={() => rightClickHandle(false)}>
          <IconLeft />
        </button>
      )}
      {showRight && (
        <button className="btn right" onClick={() => rightClickHandle(true)}>
          <IconRight />
        </button>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
}

ScrollView.propTypes = {};

export default ScrollView;
