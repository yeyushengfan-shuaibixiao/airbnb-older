import { styled } from "styled-components";

export const PictureBrowserWapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333;
  z-index: 999;
  display: flex;
  flex-direction: column;
  .top {
    position: relative;
    height: 80px;
    .closeBtn {
      position: absolute;
      color: white;
      top: 15px;
      right: 15px;
      cursor: pointer;
    }
  }
  /* 动画样式 */
  .pic-enter {
    transform: translate(${(props) => (props.$isRight ? "100%" : "-100%")});
    opacity: 0;
  }
  .pic-enter-active {
    transform: translate(0);
    opacity: 1;
    transition: all 200ms ease;
  }
  .pic-exit {
    opacity: 1;
  }
  .pic-exit-active {
    opacity: 0;
  }
  .slider {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    overflow: hidden;

    .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100% !important;
      max-width: 105vh !important;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }
    }

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      display: flex;
      justify-content: space-between;
      bottom: 0;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 85px;
        height: 100%;
        cursor: pointer;
      }
    }
  }
  .preview {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;

    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }

      .list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;

        .item {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
