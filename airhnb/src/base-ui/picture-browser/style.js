import styled from "styled-components";

export const BrowserWrapper = styled.div`
  /* width: 100%;
  height: 100vh; */
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1000000000;
  background-color: #333;
  display: flex;
  flex-direction: column;
  .top {
    height: 100px;
    width: 100%;
    /* background-color: pink; */
    padding: 32px 32px 0 0;
    color: #fff;
    display: flex;
    justify-content: end;
  }
  .center {
    position: relative;
    width: 100%;
    flex: 1;
    .control {
      .btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
      }
      .left {
        left: 24px;
      }
      .right {
        right: 24px;
      }
      .slider {
        width: 105vh;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: 0 auto;
        .pic {
        }
        .pic.enter {
          transform: ${(props) => {
            return props.right ? "translateX(100%)" : "translateX(-100%)";
          }};
          opacity: 0;
        }
        .pic.enter-active {
          transform: translateX(0);
          opacity: 1;
          transition: all 200ms;
        }
      }
    }
  }
  .bottom {
    height: 80px;
    width: 100%;
    display: flex;
    position: relative;
    .indicator {
      width: 25%;
      height: 100%;
      position: absolute;
      left: 50%;
      bottom: 50%;
      transform: translateX(-50%);
      .p {
        position: relative;
        width: 64px;
        height: 64px;
        .img {
          width: 64px;
          height: 64px;
          object-fit: cover;
        }
        .cover {
          width: 64px;
          height: 64px;
          position: absolute;
          left: 0;
          top: 0;
          background-color: rgba(0, 0, 0, 0.4);
          z-index: 999;
        }
      }
    }
    .actives {
      background-color: transparent !important;
    }
  }
`;
