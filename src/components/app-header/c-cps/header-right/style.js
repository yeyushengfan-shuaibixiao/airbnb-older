import styled from "styled-components";
export const HeadRightWarpper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => (props.theme.isAlpha ? "#fff" : "#484848")};
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 42px;

    .item {
      font-weight: 700;
      padding: 10px;
      margin-left: 5px;
      cursor: pointer;
      &:hover {
        background-color: #f7f7f7;
        border-radius: 20px;
      }
    }
  }
  .user {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
    width: 76px;
    height: 42px;
    border: 1px solid black;
    border-radius: 20px;
    cursor: pointer;
    ${(props) => props.theme.mixins.boderShadow}
    .item {
      padding: 0 4px;
    }
    .highlight {
      position: absolute;
      top: 8px;
      right: 11px;
      display: block;
      z-index: 999;
      border-radius: 8px;
      height: 7px;
      width: 5px;
      background-color: red;
    }
    .panal {
      position: absolute;
      bottom: -220px;
      /* display: none; */
      /* visibility: hidden; */
      right: 10px;
      display: flex;
      flex-direction: column;
      /* height: 200px; */
      width: 200px;
      background-color: #f9f9f9;
      box-shadow: -5px 5px 4px rgba(0, 0, 0, 0.2);
      /* animation-name: panalHeight; */
      z-index: 999;
      .top {
        height: 80px;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #ededed;
        .item {
          width: 100%;
          /* padding: 10px; */
        }
      }
      .buttom {
        height: 120px;
      }
      .register {
        font-weight: 700;
      }
      .item {
        padding: 10px 20px;
        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
    /* &:hover .panal {
      visibility: visible;
    } */
  }

  @keyframes panalHeight {
    0% {
      height: 0;
    }
    100% {
      height: 220px;
    }
  }
`;
