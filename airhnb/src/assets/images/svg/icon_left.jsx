import React from "react";
import toObject from "style-to-object";
import PropTypes from "prop-types";
function IconLeft(props) {
  const { size = { width: "12px", height: "12px" } } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={toObject(
        `display: block; fill: none; height: ${size.height}; width:${size.width}; stroke: currentcolor; strokeWidth: 5.33333; overflow: visible;`
      )}
    >
      <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
    </svg>
  );
}

IconLeft.propTypes = {
  // color: PropTypes.string,
  size: PropTypes.object,
};
export default IconLeft;
