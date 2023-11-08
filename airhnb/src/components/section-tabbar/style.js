import styled from "styled-components";

export const TabbarWrapper = styled.div`
  margin-top: 16px;
  .item {
    height: 32px;
    padding: 0 30px;
    flex-shrink: 0;
    line-height: 32px;
    border: 1px solid #d5d5d5;
    text-align: center;
    margin-right: 8px;
  }
  .active {
    background-color: #159acd;
    color: #fff;
  }
`;
