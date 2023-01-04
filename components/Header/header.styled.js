import styled from "styled-components";

export const ContactBtnWrapper = styled.div`
  grid-area: contact;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 25px;
  margin-bottom: 15px;
  // background: coral;
`;

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;

  .nav-menu {
    background: teal;
    border: solid 2px #000;
    width: 20%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: -100%;
    transition: 850ms;
    @media only screen and (max-width: 1024px) {
      width: 50%;
    }
  }

  .nav-menu.active {
    right: 0;
    transition: 350ms;
    // background: red;
  }
`;
export const Logo = styled.h1`
  position: absolute;
  left: 0;
  // background: orange;
  font-size: 30px;
  padding: 0 10px;
  a {
    color: gray;
    text-decoration: none;
  }
  @media only screen and (max-width: 531px) {
    font-size: 20px;
  }
`;

export const Header = styled.header`
  background: #fff;
  border-bottom: 2px solid gray;
  padding: 0 20px;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MenuOpenWrapper = styled.div`
  margin-left: 2rem;
  font-size: 1.5rem;
  background: none;
  color: #000;
  cursor: pointer;
  margin-right: 15px;
  margin-top: 6px;
`;

export const MenuCloseWrapper = styled.div`
  font-size: 2rem;
  padding: 20px;
  background: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;

export const MenuLink = styled.li`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  font-size: 20px;
  // background: teal;
  padding: 20px 50px 0;
  a {
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    text-decoration: none;
  }
`;
