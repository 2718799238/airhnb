import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { SectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionTabBar from "@/components/section-tabbar";
import SectionRoom from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";

function HomeSectionV2(props) {
  // 获取点击的tab
  const initialName = Object.keys(props.info?.dest_list)[0];
  const [tabName, setTabName] = useState(initialName);
  const clickTabInfo = useCallback((index, name) => {
    // console.log(name);
    setTabName(name);
  }, []);
  return (
    <SectionV2Wrapper>
      <SectionHeader title={props.info?.title} />
      <SectionTabBar
        tab_list={props.info?.dest_address}
        clickFn={clickTabInfo}
      />
      <SectionRoom
        list={props.info?.dest_list?.[tabName]}
        item_width={"33.3333%"}
      />
      <SectionFooter name={tabName} color={"#21D18B"} />
    </SectionV2Wrapper>
  );
}

HomeSectionV2.propTypes = {
  info: PropTypes.object,
};

export default HomeSectionV2;
