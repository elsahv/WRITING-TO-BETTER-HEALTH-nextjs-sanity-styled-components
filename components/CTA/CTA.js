import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  background: teal;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  width: 100%;
  // height: 50px;
  padding: 20px 0;
  font-size: 20px;
`;

export const DevDesignsWrapper = styled.div`
  padding: 20px 100px;
  margin: 30px 0;
  @media only screen and (max-width: 1024px) {
    padding: 0 10px;
    p {
      font-size: 15px;
    }
  }
  @media only screen and (max-width: 600px) {
    padding: 0 50px;
  }
`;

export const Title = styled.h4`
  font-size: 30px;
  @media only screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const IconWrapper = styled.div`
  font-size: 45px;
  @media only screen and (max-width: 1024px) {
    font-size: 40px;
  }
`;
