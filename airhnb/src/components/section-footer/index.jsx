import React from "react";
import PropTypes from "prop-types";
import { FooterWrapper } from "./style";
import IconRight from "@/assets/images/svg/icon_right";

function SectionFooter(props) {
  let { name } = props;
  if (!name) {
    name = "";
  }
  return (
    <FooterWrapper color={props.color ?? "#000"}>
      <div className="info">
        <span className="text">查看更多{name}房源</span>
        <span className="icon">
          <IconRight />
        </span>
      </div>
    </FooterWrapper>
  );
}

SectionFooter.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

export default SectionFooter;
