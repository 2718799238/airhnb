import styled from "styled-components";

export const DetailWrapper = styled.div`
  height: 110vh;
  margin: 20px 40px;
  .header {
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 24px;
    .left {
      flex: 1;
      padding: 6px;
      img {
        width: 100%;
        object-fit: cover;
        transition: all 0.3s ease-in-out;
        /* &:hover {
          cursor: pointer;
          transform: scale(1.05);
        } */
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      width: 50%;
      img {
        width: 50%;
        object-fit: cover;
        padding: 6px 6px;
        transition: all 0.3s ease-in-out;
        /* &:hover {
          cursor: pointer;
          transform: scale(1.05);
        } */
      }
    }
  }
  .right {
    flex: 1;
  }
`;
