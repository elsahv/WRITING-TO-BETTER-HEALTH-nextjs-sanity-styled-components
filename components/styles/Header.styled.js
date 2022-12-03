import styled from "styled-components";

export const Nav = styled.nav`
  padding-top: 10px;
  border-bottom: solid 1px gray;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "navlinks contact";
`;
export const Navlinks = styled.div`
  grid-area: navlinks;
  padding-left: 25px;
  // background: teal;
  #logo {
    font-size: 30px;
  }
  .nav-link {
    margin: 0 15px;
  }
  a {
    color: gray;
    text-decoration: none;
  }
`;
export const ContactBtnWrapper = styled.div`
  grid-area: contact;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 25px;
  margin-bottom: 15px;
  // background: coral;
`;
