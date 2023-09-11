import { styled } from "styled-components";
// import coverIMg from "@/assets/img/head.jpg";
export const HomeBannerWapper = styled.div`
  height: 570px;
  width: 100%;
  background-image: url(${require("@/assets/img/head.jpg")});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: 80px;
`;
