const { default: styled } = require("styled-components");

export const LongForWrapper = styled.div`
  width: 180px;
  height: 220px;
  margin-top: 24px;
  position: relative;
  flex-shrink: 0;
  margin-right: 14px;
  .coverImg {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      border-radius: 8px;
    }
  }
  .inner {
    position: absolute;
    width: 180px;
    height: 70%;
    border-radius: 8px;
    overflow: hidden;
    bottom: 0;
    left: 0;
    .info {
      width: 100%;
      height: 90%;
      position: absolute;
      bottom: 0;
      left: 0;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .city {
        font-size: 24px;
      }
      .price {
        padding: 6px 0;
        font-size: 14px;
      }
    }
  }
`;
