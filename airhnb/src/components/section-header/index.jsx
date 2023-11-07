import PropTypes from "prop-types";
import React, { memo } from "react";
import { HeaderWrapper } from "./style";

const SectionHeader = memo((props) => {
  return <HeaderWrapper>{props?.title}</HeaderWrapper>;
});

SectionHeader.propTypes = {
  title: PropTypes.string,
};

export default SectionHeader;
