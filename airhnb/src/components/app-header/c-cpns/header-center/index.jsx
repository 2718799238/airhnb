import React, { memo } from "react";
import { CenterWrapper } from "./style";
import IconSearch from "@/assets/images/svg/icon_search";

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="searchBar">
        <div className="item">任何地方</div>
        <div className="item">任意一周</div>
        <div className="searchIcon">
          <div className="text">添加房客</div>
          <div className="icon">
            <IconSearch />
          </div>
        </div>
      </div>
    </CenterWrapper>
  );
});

export default HeaderCenter;
