import styled from "styled-components";

export const Wrapper = styled.div`
  background: lightgray;
  padding: 30px 20px;
  // border: solid 1px #000;
`;

export const Title = styled.h2`
  // padding-left: 50px;
  padding: 20px 0;
  text-align: center;
  margin-bottom: 5px;
  text-decoration: underline;
  font-size: 34px;
  // color: #fff;
  // text-shadow: 1px 1px 1px #000;
  // background: teal;
`;

export const ContentBody = styled.p`
  padding: 0px 70px 50px;
  @media only screen and (max-width: 768px) {
    padding-bottom 30px;
    padding-left: 0;
    padding-right:0;
  }
`;

export const PkgRateWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PkgRateContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
  // background: pink;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Sq = styled.div`
  // background: teal;
  color: #000;
  // text-shadow: 1px 1px 1px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // border: solid 1px #000;
  text-align: center;
  li {
    border-bottom: solid 1px #000;
    list-style: none;
    padding: 5px 0;
  }
`;
