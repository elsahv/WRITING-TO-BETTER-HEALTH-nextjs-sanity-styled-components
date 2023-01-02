import styled from "styled-components";

export const ImgWrapper = styled.div`
  padding: 20px 0 50px 0;
  // background: teal;
  width: 800px;
  height: 800px;

  @media only screen and (max-width: 1024px) {
    width: 400px;
    height: 400px;
    padding: auto;
  }
  @media only screen and (max-width: 531px) {
    width: 300px;
    height: 300px;
    padding: auto;
  }
`;
