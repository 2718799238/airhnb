import React, { memo, useEffect } from "react";
import HomeBanner from "./c-cpns/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";

import { HomeWrapper } from "./style";

import HomeSectionV1 from "./c-cpns/home-sevtion-v1";

const index = memo(() => {
  // 网络请求
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  // 拿取数据
  const list = useSelector((state) => {
    return {
      goodPriceInfo: state.home.goodPriceInfo,
      highScore: state.home.highScore,
    };
  }, shallowEqual);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <HomeSectionV1 list={list} />
      </div>
    </HomeWrapper>
  );
});

export default index;
