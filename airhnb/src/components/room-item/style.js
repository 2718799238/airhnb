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
      .left {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        z-index: 999;
      }
      .right {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 40px;
        z-index: 999;
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
