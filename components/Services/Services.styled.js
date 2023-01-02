import styled from "styled-components";

export const ServicesGrid = styled.div`
  // background: orange;
  // height: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "leftSide rightSide";

  @media only screen and (max-width: 1024px) {
    height: 1300px;
    grid-template-columns: 1fr;
    grid-template-areas:
      "leftSide"
      "rightSide";
  }
`;

export const AccordianWrapper = styled.div`
  grid-area: leftSide;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 200px;
  @media only screen and (max-width: 531px) {
    padding-bottom: 0px;
  }
`;

export const AccordianContainer = styled.div`
  padding: 100px 150px;
  @media only screen and (max-width: 600px) {
    padding: 20px 70px;
  }
  @media only screen and (max-width: 531px) {
    padding: 10px;
  }
`;

export const ServiceImgWrapper = styled.div`
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
`;
