import React, { memo } from "react";
import toObject from "style-to-object";
const IconList = memo(() => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        style={toObject(
          "display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; strokeWidth: 3; overflow: visible;"
        )}
      >
        <g fill="none">
          <path d="M2 16h28M2 24h28M2 8h28"></path>
        </g>
      </svg>
    </div>
  );
});

export default IconList;
