import { styled } from "styled-components";

export const SectionFooterWapper = styled.div`
  .more {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    color: ${(props) => props.$color};
    cursor: pointer;
    .text {
      font-size: 17px;
      font-weight: 700;
    }
    &:hover .text {
      text-decoration: underline;
    }
    .arrow {
      margin-left: 5px;
    }
  }
`;
