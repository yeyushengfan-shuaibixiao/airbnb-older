import { styled } from "styled-components";

export const EntireFitterWapper = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 15px;
  border: 1px solid #f2f2f2;
  background-color: #f5f5f5;
  .filter {
    display: flex;
    margin-left: 15px;
    .item {
      padding: 10px 15px;
      border: 1px solid #dadada;
      margin-top: 5px;
      margin-left: 5px;
      cursor: pointer;
      ${(props) => props.theme.mixins.boderShadow}
    }
  }
  .active {
    background-color: #008489;
    border: 1px solid #008489;
    color: #ffffff;
  }
`;
