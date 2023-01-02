import styled from "styled-components";

export const CTA = styled.div`
  padding-left: 35px;
  padding-bottom: 20px;

  @media only screen and (max-width: 1024px) {
    padding: 10px;
  }
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

  @media only screen and (max-width: 1024px) {
    height: 280px;
  }
  @media only screen and (max-width: 600px) {
    height: 320px;
  }
`;
