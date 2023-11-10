import React, { memo } from "react";
import toObject from "style-to-object";
import PropTypes from "prop-types";
const IconRight = memo((props) => {
  const { size = { width: "12px", height: "12px" } } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={toObject(
        `display: block; fill: none; height: ${size.height}; width: ${size.width}; stroke: currentcolor; strokeWidth: 5.33333; overflow: visible;`
      )}
    >
      <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path>
    </svg>
  );
});
IconRight.propTypes = {
  // color: PropTypes.string,
  size: PropTypes.object,
};
export default IconRight;
