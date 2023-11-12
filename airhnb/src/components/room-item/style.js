import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  width: ${(props) => props.width};
  padding: 18px 8px;
  flex-shrink: 0;
  .cover {
    height: 50%;
    padding: 60% 0 0;
    position: relative;
    .coverImg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .cover-list {
    position: relative;
    color: #fff;
    .control {
      height: 100%;
      .left {
        display: flex;
        align-items: center;
        height: 100%;
        width: 40px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        z-index: 999;
        background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.05)
        );
      }
      .right {
        position: absolute;
        display: flex;
        align-items: center;
        height: 100%;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 40px;
        z-index: 999;
        background-image: linear-gradient(
          to left,
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.05)
        );
      }
    }
    .indicator {
      position: absolute;
      width: 100px;
      height: 10px;
      bottom: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .verify {
    width: 100%;
    height: 50%;
    font-size: 12px;
    color: #767676;
    margin-top: 16px;

    .name {
      width: 100%;
      color: #000;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 2;
      margin: 12px 0;
    }
    .price {
      margin-bottom: 12px;
    }
    .rate {
      color: ${(props) => props.color};
      font-size: ${(props) => props.fontSize}px;
    }
  }
`;
