import React from "react";
import PropTypes from "prop-types";
import { FooterWrapper } from "./style";
import IconRight from "@/assets/images/svg/icon_right";
import { NavLink } from "react-router-dom";

function SectionFooter(props) {
  let { name } = props;
  if (!name) {
    name = "";
  }
  return (
    <FooterWrapper color={props.color ?? "#000"}>
      <NavLink to={"/entire"}>
        <div className="info">
          <span className="text">查看更多{name}房源</span>
          <span className="icon">
            <IconRight />
          </span>
        </div>
      </NavLink>
    </FooterWrapper>
  );
}

SectionFooter.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

export default SectionFooter;
