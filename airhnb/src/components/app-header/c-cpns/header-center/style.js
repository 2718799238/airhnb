import styled from "styled-components";

export const CenterWrapper = styled.div`
  text-align: center;
  .searchBar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 325px;
    height: 45px;
    border: 1px solid #ddd;
    border-radius: 28px;
    margin: 8px 0;

    /* 添加阴影动画 */
    ${(props) => props.theme.animation.boxShadow}
    .searchIcon {
      display: flex;
      align-items: center;
      padding-left: 16px;
      .text {
        color: #717171;
        font-weight: 400;
        font-size: 14px;
      }
      .icon {
        width: 32px;
        height: 32px;
        background-color: ${(props) => props.theme.color.primaryColor};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        margin-left: 16px;
      }
    }
    .item {
      color: #000;
      font-weight: 700;
      border-right: 1px solid #999;
      padding: 0 16px;
      font-size: 14px;
    }
  }
`;
