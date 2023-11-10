import styled from "styled-components";

export const RoomsWrapper = styled.div`
  margin: 15px 40px;
  position: relative;
  .roomList {
    display: flex;
    flex-wrap: wrap;
  }
  > .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s ease-in-out;
  }
`;
