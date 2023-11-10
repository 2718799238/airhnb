import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 40px;
  .item {
    height: 32px;
    line-height: 32px;
    flex-shrink: 0;
    font-size: 14px;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    padding: 0 10px;
    margin-right: 10px;
    cursor: pointer;
  }
  .active {
    background: #159acd;
    color: #fff;
  }
`;
