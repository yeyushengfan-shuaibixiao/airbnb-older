import { styled } from "styled-components";

export const RoomItemWapper = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  width: ${(props) => props.$itemwidth};
  padding: 8px;
  /* margin-right: -8px; */
  .inner {
    width: 100%;
    position: relative;
    .cover {
      position: relative;
      box-sizing: border-box;
      padding: 66.66% 8px 0;
      border-radius: 3px;
      overflow: hidden;
    }
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color: ${(props) => props.$verifycolor || "#39576a"};
    }
    .name {
      font-size: 16px;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-top: 5px;
    }
    .price {
      margin: 8px 0;
    }
  }
  :where(.css-dev-only-do-not-override-nnuwmp).ant-rate {
    font-size: 12px;
    color: #00848a;
  }
  .buttom {
    font-size: 13px;

    .count,
    .extra {
      margin-left: 8px;
    }
  }
  .slider {
    position: relative;
    cursor: pointer;
    &:hover {
      .control {
        display: flex;
      }
    }
    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: none;
      justify-content: space-between;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 100%;
        background: linear-gradient(
          to left,
          transparent 0%,
          rgba(0, 0, 0, 0.25) 100%
        );
        &.left {
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 100%
          );
        }
      }
    }
    .indicator {
      position: absolute;
      z-index: 9;
      width: 30%;
      left: 0;
      right: 0;
      bottom: 10px;
      margin: 0 auto;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;

        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;

          &.active {
            width: 8px;
            height: 8px;
          }
        }
      }
    }
  }
`;
