import { styled } from "styled-components";

export const SectionTapWapper = styled.div`
  /* display: flex; */
  .item {
    box-sizing: border-box;
    flex-basis: 120px;
    flex-shrink: 0;
    padding: 14px 14px;
    margin-right: 9px;
    font-size: 17px;
    text-align: center;
    border: 1px solid #d8d8d8;
    white-space: nowrap;
    cursor: pointer;
    ${(props) => props.theme.mixins.boderShadow}
    &.active {
      color: #e6fbff;
      background-color: #007d82;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;
