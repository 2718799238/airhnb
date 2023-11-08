import React, { useState } from "react";
import PropTypes from "prop-types";
import { TabbarWrapper } from "./style";
import ScrollView from "@/base-ui/scroll-view";

function SectionTabBar(props) {
  const { tab_list = [], clickFn } = props;

  //定义点击tab函数，判断是否选中
  const [currentTab, setCurrent] = useState(0);
  function clickTab(index, name) {
    setCurrent(index);
    clickFn(index, name);
  }
  // console.log(tab_list);
  return (
    <TabbarWrapper>
      <ScrollView>
        {tab_list?.map((item, index) => {
          return (
            <div
              className={`item ${currentTab === index ? "active" : ""}`}
              onClick={() => clickTab(index, item.name)}
              key={item.name}
            >
              {item.name}
            </div>
          );
        })}
      </ScrollView>
    </TabbarWrapper>
  );
}

SectionTabBar.propTypes = {
  tab_list: PropTypes.array,
  clickFn: PropTypes.func,
};

export default SectionTabBar;
