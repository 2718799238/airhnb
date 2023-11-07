import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";

import IconGlobal from "@/assets/images/svg/icon_global";
import IconList from "@/assets/images/svg/icon_list";
import IconProfile from "@/assets/images/svg/icon_profile";

const HeaderRight = memo(() => {
  const [isShow, changeShow] = useState(false);
  useEffect(() => {
    function windowHandleClick() {
      changeShow(false);
    }
    window.addEventListener("click", windowHandleClick, true);
    return () => {
      window.removeEventListener("click", windowHandleClick, true);
    };
  }, []);
  return (
    <RightWrapper>
      <div className="global">
        <IconGlobal />
      </div>
      <div className="profile" onClick={() => changeShow(true)}>
        <div className="list">
          <IconList />
        </div>
        <div className="avatar">
          <IconProfile />
        </div>
        <div className="panel" style={{ display: isShow ? "block" : "none" }}>
          <div className="top">
            <div className="item register">注册</div>
            <div className="item login">登录</div>
          </div>
          <div className="bottom item">帮助中心</div>
        </div>
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
