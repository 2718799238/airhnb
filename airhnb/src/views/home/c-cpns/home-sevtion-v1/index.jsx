import SectionHeader from "@/components/section-header";
import SectionRoom from "@/components/section-rooms";
import PropTypes from "prop-types";
import React, { memo } from "react";

const HomeSectionV1 = memo((props) => {
  return (
    <div>
      <SectionHeader title={props.list?.goodPriceInfo?.title} />
      <SectionRoom
        className="room-list"
        list={props.list?.goodPriceInfo?.list}
      />
      <SectionHeader title={props.list?.highScore?.title} />
      <SectionRoom className="room-list" list={props.list?.highScore?.list} />
    </div>
  );
});

HomeSectionV1.propTypes = {
  list: PropTypes.object,
};

export default HomeSectionV1;
