import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  width: 25%;
  padding: 18px 8px;
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
      height: 90%;
    }
  }
  .verify {
    width: 100%;
    height: 50%;
    font-size: 12px;
    color: #767676;

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
      color: ${(props) => props.text_color};
      font-size: ${(props) => props.fz}px;
    }
  }
`;
