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
`;

export const SmImgWrapper = styled.div`
  margin: 40px 0;
  background: teal;
  width: 450px;
  height: 400px;
  // display: flex;
  // justify-content: center;

  @media only screen and (max-width: 1024px) {
    padding: 20px 0 100px 150px;
    // margin-top: 50px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 0;
  }
`;
