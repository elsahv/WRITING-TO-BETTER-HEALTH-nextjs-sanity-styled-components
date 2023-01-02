import styled from "styled-components";

export const Banner = styled.div`
  text-align: left;
  color: #000;
  padding: 100px 150px;
  @media only screen and (max-width: 1024px) {
    padding: 30px 50px;
  }
  @media only screen and (max-width: 531px) {
    padding: 20px;
  }
`;

export const BlogPageTitle = styled.h2`
  font-weight: bold;
  font-size: 35px;
  // color: teal;
  // text-shadow: 1px 1px 1px #000;
`;
