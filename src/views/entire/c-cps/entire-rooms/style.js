import { styled } from "styled-components";

export const EntireRoomsWapper = styled.div`
  margin-top: 120px;
  position: relative;
  padding: 20px 15px;
  h1 {
    font-size: 22px;
    margin-left: 15px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
  > .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
