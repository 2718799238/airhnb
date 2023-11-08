import React, { memo, useEffect } from "react";
import HomeBanner from "./c-cpns/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";

import { HomeWrapper } from "./style";

import HomeSectionV1 from "./c-cpns/home-sevtion-v1";

import HomeSectionV2 from "./c-cpns/home-section-v2";

import HomeLongFor from "./c-cpns/long-for";
import HomeSectionV3 from "./c-cpns/home-section-v3";
const index = memo(() => {
  // 网络请求
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  // 拿取数据
  const {
    goodPriceInfo,
    highScore,
    discountInfo,
    recommendDestInfo,
    longForInfo,
    plusInfo,
  } = useSelector((state) => {
    return {
      goodPriceInfo: state.home.goodPriceInfo,
      highScore: state.home.highScore,
      discountInfo: state.home.discountInfo,
      recommendDestInfo: state.home.recommendDestInfo,
      longForInfo: state.home.longForInfo,
      plusInfo: state.home.plusInfo,
    };
  }, shallowEqual);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <HomeLongFor info={longForInfo} />
        <HomeSectionV3 info={plusInfo} item_width={"20%"} />
        {Object.keys(discountInfo).length && (
          <HomeSectionV2 info={discountInfo} />
        )}
        {Object.keys(recommendDestInfo).length && (
          <HomeSectionV2 info={recommendDestInfo} />
        )}
        <HomeSectionV1 info={goodPriceInfo} item_width={"25%"} />
        <HomeSectionV1 info={highScore} item_width={"25%"} />
      </div>
    </HomeWrapper>
  );
});

export default index;
