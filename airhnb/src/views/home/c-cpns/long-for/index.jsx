import React from "react";
import PropTypes from "prop-types";
import SectionHeader from "@/components/section-header";
import LongItem from "@/components/long-item/indedx";
import ScrollView from "@/base-ui/scroll-view";

function HomeLongFor(props) {
  return (
    <div>
      <SectionHeader title={props.info?.title} />
      <ScrollView>
        {props.info?.list?.map((item) => {
          return <LongItem key={item.city} info={item} />;
        })}
      </ScrollView>
    </div>
  );
}

HomeLongFor.propTypes = {
  info: PropTypes.object,
};

export default HomeLongFor;
