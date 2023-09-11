import { styled } from "styled-components";

export const ScorllViewWapper = styled.div`
  position: relative;
  padding: 5px 0;
  .scroll {
    overflow: hidden;
    .slot {
      display: flex;
      transition: transform 200ms ease;
    }
  }
  .left,
  .right {
    position: absolute;
    padding: 15px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(1);
    z-index: 9;
    top: 50%;
    transform: translate(0, -50%);
  }
  .left {
    left: -34px;
  }
  .right {
    right: -34px;
  }
`;
