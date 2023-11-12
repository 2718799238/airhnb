import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { BrowserWrapper } from "./style";
import IconClose from "@/assets/images/svg/icon_close";
import IconLeft from "@/assets/images/svg/icon_left";
import IconRight from "@/assets/images/svg/icon_right";
import Indicator from "../indicator";

function PictureBrowser(props) {
  const { close, pictureList = [] } = props;

  const [currentIndex, setIndex] = useState(0);
  const [isRight, setIsRight] = useState(true);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function handleControlClick(isRight) {
    if (isRight) {
      setIsRight(true);
      if (currentIndex < pictureList.length - 1) {
        setIndex(currentIndex + 1);
      } else {
        setIndex(0);
      }
    } else {
      setIsRight(false);
      if (currentIndex > 0) {
        setIndex(currentIndex - 1);
      } else {
        setIndex(pictureList.length - 1);
      }
    }
    console.log("Index", currentIndex);
  }
  function handleIndictorItem(index) {
    setIndex(index);
    if (index > currentIndex) {
      setIsRight(true);
    } else {
      setIsRight(false);
    }
  }
  return (
    <BrowserWrapper right={isRight}>
      <div className="top">
        <div className="close" onClick={close}>
          <IconClose size={{ height: "18px", width: "18px" }} />
        </div>
      </div>
      <div className="center list">
        <div className="control">
          <div className="btn left" onClick={() => handleControlClick(false)}>
            <IconLeft size={{ height: "64px", width: "64px" }} />
          </div>
          <div className="btn right" onClick={() => handleControlClick(true)}>
            <IconRight size={{ height: "64px", width: "64px" }} />
          </div>
          <div className="slider">
            <SwitchTransition mode="out-in">
              <CSSTransition
                className="pic"
                timeout={200}
                key={pictureList?.[currentIndex]}
              >
                <img src={pictureList?.[currentIndex]} alt="" />
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="indicator">
          <Indicator dot={false} selectedIndex={currentIndex}>
            {pictureList?.map((item, index) => (
              <div className="p" onClick={(e) => handleIndictorItem(index)}>
                <img className={`img`} key={index} src={item} alt="" />
                <div
                  className={`cover ${index === currentIndex ? "actives" : ""}`}
                ></div>
              </div>
            ))}
          </Indicator>
        </div>
      </div>
    </BrowserWrapper>
  );
}

PictureBrowser.propTypes = {
  pictureList: PropTypes.array,
  close: PropTypes.func,
};

export default PictureBrowser;
