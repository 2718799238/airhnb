import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;
  .content {
    width: 100%;
    height: 85px;
    display: flex;
    align-items: center;
    /* margin: 10px 10px; */

    > * {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 10px;
      height: 10px;
      flex-shrink: 0;
      align-items: center;
      /* border: 1px solid #666; */
      margin: 0 3px;
    }
  }
  .dot {
    display: block;
    width: 3px !important;
    height: 3px !important;
    border-radius: 50%;
    background: #fff;
    transition: all linear 0.3s;
    padding: 0 3px;
    transform-origin: center;
  }
  .active {
    transform: scale(1.5, 2);
  }
`;
