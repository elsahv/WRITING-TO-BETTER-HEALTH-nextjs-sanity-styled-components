import styled from "styled-components";

export const ImgWrapper = styled.div`
  padding: 20px 0 50px 0;
  // background: teal;
  // margin-bottom: 400px;

  @media only screen and (max-width: 1024px) {
    padding: 20px 0 100px 150px;
    // margin-top: 50px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 0;
  }
`;

export const BlogPostImgWrapper = styled.div`
  cursor: pointer;
  .img {
    width: 100%;
    height: 400px;
    border: solid 1px black;
    &:hover {
      opacity: 0.7;
      transition: 2s;
    }
  }

  @media only screen and (max-width: 1024px) {
    .img {
      height: 300px;
    }
  }
`;
