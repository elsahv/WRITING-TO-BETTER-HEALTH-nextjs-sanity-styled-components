import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;

  }

  html {
    scroll-behavior: smooth;
    line-height: 1.5;
  }
h1 {
  // color: red;
  @media only screen and (max-width: 600px) {
   font-size: 23px;
   margin: 10px 0;
  }
}
  h2 {
    // color: blue;
    @media only screen and (max-width: 600px) {
      font-size: 17px;
     }
  }
  h4 {
    padding: 10px 0;
  }

  p {
    margin: 5px 0;
    font-size: 17px;
  }
  `;

export default GlobalStyles;
