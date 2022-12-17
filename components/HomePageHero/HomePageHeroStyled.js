import styled from "styled-components";

export const HeroContent = styled.div`
  // background: red;
  padding-top: 30%;
  padding-left: 40px;
  li {
    padding-top: 5px;
    padding-left: 10px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 80px 60px;
    // margin-top: 50px;
  }
  @media only screen and (max-width: 600px) {
    // padding: 50px 0 30px 40px;
  }
`;

export const Headline = styled.h4`
  font-size: 45px;
  @media only screen and (max-width: 1024px) {
  font-size: 30px;
  }
 
    @media only screen and (max-width: 834px) {
      font-size: 20px;
      }

}
`;
