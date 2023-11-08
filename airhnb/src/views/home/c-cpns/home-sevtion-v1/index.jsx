import SectionFooter from "@/components/section-footer";
import SectionHeader from "@/components/section-header";
import SectionRoom from "@/components/section-rooms";
import PropTypes from "prop-types";
import React, { memo } from "react";

const HomeSectionV1 = memo((props) => {
  const { item_width = "25%" } = props;
  return (
    <div>
      <SectionHeader title={props.info?.title} />
      <SectionRoom
        className="room-list"
        list={props.info?.list}
        item_width={item_width}
      />
      <SectionFooter />
    </div>
  );
});

HomeSectionV1.propTypes = {
  info: PropTypes.object,
  item_width: PropTypes.string,
};

export default HomeSectionV1;
