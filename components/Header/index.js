import React, { useState } from "react";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./sidebarData";
import {
  Wrapper,
  Header,
  Logo,
  MenuCloseWrapper,
  MenuLink,
  MenuOpenWrapper,
  ContactBtnWrapper,
} from "./header.styled";
import { ContactBtn } from "../styles/buttons/ContactBtn.styled";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <Wrapper>
      <Header>
        <Logo>
          <Link href="/" id="logo">
            Writing to Better Health
          </Link>
        </Logo>

        <ContactBtnWrapper>
          <MenuOpenWrapper>
            <FaIcons.FaBars onClick={showSidebar} />
          </MenuOpenWrapper>
          <ContactBtn>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </ContactBtn>
        </ContactBtnWrapper>
      </Header>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul onClick={showSidebar}>
          <MenuCloseWrapper>
            <AiIcons.AiOutlineClose />
          </MenuCloseWrapper>
          {SidebarData.map((item, index) => {
            return (
              <MenuLink key={index}>
                <Link href={item.path}>
                  <h2>{item.title}</h2>
                </Link>
              </MenuLink>
            );
          })}
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
