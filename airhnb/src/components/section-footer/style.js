import styled from "styled-components";

export const FooterWrapper = styled.div`
  .info {
    width: 500px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${(prop) => prop.color};
  }
`;
