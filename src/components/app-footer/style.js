import { styled } from "styled-components";

export const FooterWapper = styled.div`
  .footerWapperBox {
    /* width: px; */
    border-top: 1px solid #e5e5e5;
    .footerList {
      height: 200px;
      /* background-color: red; */
      display: flex;
      flex-direction: row;
      justify-content: center;
      /* align-items: center; */

      .list {
        border-bottom: 1px solid #e5e5e5;
        padding: 20px 80px;
      }
      .listName {
        margin-bottom: 5px;
        font-weight: 700;
      }
      .dsc {
        padding: 5px 0;
        color: #9c958c;
      }
    }
    p {
      text-align: center;
    }
  }
`;
