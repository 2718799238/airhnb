const { default: styled } = require("styled-components");

export const ViewWrapper = styled.div`
  position: relative;
  .btn {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #d5d5d4;
    color: #666;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 99;
  }
  .left {
    top: 50%;
    transform: translateY(-50%);
    left: -8px;
  }
  .right {
    top: 50%;
    transform: translateY(-50%);

    right: -8px;
  }
  .scroll {
    overflow: hidden;
    .scroll-content {
      display: flex;
      transition: all 250ms linear;
    }
  }
`;
