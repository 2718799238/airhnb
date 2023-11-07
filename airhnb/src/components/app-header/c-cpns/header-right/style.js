const { default: styled } = require("styled-components");

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: right;
  align-items: center;
  .global {
    width: 55px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #222;
  }
  .profile {
    height: 45px;
    width: 86px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 28px;
    border: 1px solid #ddd;
    position: relative;
    ${(props) => props.theme.animation.boxShadow};
    .list {
      width: 16px;
      border-right: 1px solid #eee;
      padding-right: 28px;
      padding-left: 8px;
      margin-left: 2px;
    }
    .avatar {
      width: 32px;
      color: #717171;
    }
    .panel {
      position: absolute;
      top: 55px;
      right: 0;
      width: 230px;
      height: 150px;
      border-radius: 12px;
      border: 1px solid #ddd;
      background-color: #fff;

      .top {
        border-bottom: 1px solid #ddd;
      }
      .item {
        width: 100%;
        height: 45px;
        line-height: 45px;
        padding-left: 12px;
        &:hover {
          background-color: #e1e1e1;
        }
      }
    }
  }
`;
