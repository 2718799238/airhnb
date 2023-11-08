import React from "react";
import PropTypes from "prop-types";
import { LongForWrapper } from "./style";

function LongItem(props) {
  return (
    <LongForWrapper>
      <div className="coverImg">
        <img src={props.info?.picture_url} alt="" />
      </div>
      <div className="inner">
        <div className="info">
          <div className="city">{props.info?.city}</div>
          <div className="price">均价{props.info?.price}</div>
        </div>
      </div>
    </LongForWrapper>
  );
}

LongItem.propTypes = {
  info: PropTypes.object,
};

export default LongItem;
