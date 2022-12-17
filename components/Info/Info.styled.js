import styled from "styled-components";

export const CTA = styled.div`
  padding-left: 35px;
  padding-bottom: 20px;

  @media only screen and (max-width: 1024px) {
    padding: 20px 50px;
  }
`;

export const Title = styled.h2`
  font-size: 22px;
`;

export const Headline1 = styled.div`
  font-size: 25px;
`;

export const Headline2 = styled.div`
  font-size: 20px;
  padding-top: 10px;
`;

export const Sq = styled.div`
  border: solid 2px black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 20px 50px 20px;
  height: 200px;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  h4 {
    padding: 10px 0;
    font-size: 17px;
  }
  p {
    font-size: 16px;
  }
  @media only screen and (max-width: 1024px) {
    height: 280px;
  }
  @media only screen and (max-width: 600px) {
    height: 320px;
  }
`;
export const IconWrapper = styled.div`
  font-size: 45px;
`;
