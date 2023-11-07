import React, { memo } from "react";
import { FooterWrapper } from "./style";

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="left t">
        <div className="item title">出租房源</div>
        <div className="item">来爱彼迎发布房源</div>
        <div className="item">AirCover 四海无忧</div>
        <div className="item">出租资源</div>
        <div className="item">社区论坛</div>
        <div className="item">负责任地出租</div>
      </div>
      <div className="center t">
        <div className="item title">客服支持</div>
        <div className="item">帮助中心</div>
        <div className="item">AirCover 四海无忧</div>
        <div className="item">反歧视</div>
        <div className="item">残障人士支持</div>
        <div className="item">取消预订的选择</div>
        <div className="item">举报邻里问题</div>
      </div>
      <div className="right t">
        <div className="item title">爱彼迎</div>
        <div className="item">新功能</div>
        <div className="item">工作机会</div>
        <div className="item">投资者</div>
        <div className="item">Airbnb紧急住宿</div>
      </div>
    </FooterWrapper>
  );
});

export default AppFooter;
