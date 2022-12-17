import styled from "styled-components";

export const BannerTitle = styled.h2`
  font-size: 35px;
  @media only screen and (max-width: 834px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 401px) {
    font-size: 20px;
    padding-bottom: 10px;
  }
`;

export const ContactBtnsWrapper = styled.div`
  // background: green;
  margin-top: 20px;
  width: 260px;
  display: flex;
  justify-content: space-between;
`;
