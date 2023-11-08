import React from "react";
import toObject from "style-to-object";

function IconLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={toObject(
        "display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; strokeWidth: 5.33333; overflow: visible;"
      )}
    >
      <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
    </svg>
  );
}

export default IconLeft;
