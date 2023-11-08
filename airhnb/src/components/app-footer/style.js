import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #d5d5d5;
  padding: 12px 60px;
  margin-top: 26px;
  text-align: ${(props) => props.theme.footer.textAlgin};
  .left {
    flex: 1;
  }
  .right {
    flex: 1;
  }
  .center {
    flex: 1;
  }
  .t {
    display: flex;
    flex-direction: column;
    .title {
      font-weight: 700;
      color: #000;
      padding: 12px 0;
    }
    .item {
      padding: 6px 0;
    }
  }
`;
