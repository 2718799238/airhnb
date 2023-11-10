import React from "react";
import PropTypes from "prop-types";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";
import ScrollView from "@/base-ui/scroll-view";

function HomeSectionV3(props) {
  const { item_width = "20%" } = props;
  return (
    <div>
      <SectionHeader title={props.info?.title} />
      <ScrollView>
        {props.info?.list?.map((item) => {
          return <RoomItem key={item.id} info={item} item_width={item_width} />;
        })}
      </ScrollView>
    </div>
  );
}

HomeSectionV3.propTypes = {
  info: PropTypes.object,
  item_width: PropTypes.string,
};

export default HomeSectionV3;
