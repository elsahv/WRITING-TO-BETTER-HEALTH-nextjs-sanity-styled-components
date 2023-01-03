import styled from "styled-components";

export const FooterWrapper = styled.footer`
  border-top: solid 1px #000;
  width: 100%;
  a {
    color: #000;
  }
  @media only screen and (max-width: 600px) {
    border-top: solid 1px #000;
  }
`;

export const Grid = styled.div`
  // background: orange;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  // grid-template-rows: 1fr;
  grid-template-areas: "CTA CTA sitemap";

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "CTA"
      "CTA"
      "sitemap";
  }
`;

export const LeftSide = styled.div`
  grid-area: CTA;
  // background: teal;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px 0 20px 250px;
  @media only screen and (max-width: 834px) {
    padding: 0 0 0 80px;
  }
  @media only screen and (max-width: 600px) {
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
  }
`;
export const RightSide = styled.div`
  grid-area: sitemap;
  // background: coral;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px;
  border-left: 1px solid #000;

  @media only screen and (max-width: 600px) {
    border-top: 1px solid #000;
    border-left: none;
  }
`;

export const ContactCTATitle = styled.h2`
  // background: orange;
`;

export const FooterlinksContainer = styled.div`
  // background: pink;
  // border-left: solid 1px #000;
`;
