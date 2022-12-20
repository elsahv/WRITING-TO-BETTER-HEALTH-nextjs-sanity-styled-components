import styled from "styled-components";

export const ServicesGrid = styled.div`
  // background: orange;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "leftSide rightSide";

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "leftSide"
      "rightSide";
  }
`;

export const ServiceLeft = styled.div`
  grid-area: leftSide;
  // background: teal;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const LeftWrapper = styled.div`
  padding: 100px 150px;
  @media only screen and (max-width: 600px) {
    padding: 20px 70px;
  }
  @media only screen and (max-width: 531px) {
    padding: 10px;
  }
`;

export const ServicesTitle = styled.h2`
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 531px) {
    font-size: 20px;
  }
`;

export const ServiceRight = styled.div`
  grid-area: rightSide;
  // background: coral;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    padding-top: 150px;
  }
  @media only screen and (max-width: 600px) {
    padding-top: 220px;
  }
  @media only screen and (max-width: 499px) {
    padding-top: 420px;
  }
`;
