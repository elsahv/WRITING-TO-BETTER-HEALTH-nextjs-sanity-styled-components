import Link from "next/link";
import { SidebarWrapper, Logo, NavLinks } from "./Sidebar.styled";

const Sidebar = () => {
  return (
    <>
      <SidebarWrapper>
        <Logo>
          <Link href="/">Writing to Better Health</Link>
        </Logo>
        <NavLinks>
          {/* <Link href="/web-development">Web Development</Link>
          <Link href="/blog">Blog</Link> */}
          <Link href="/contact">Contact</Link>
        </NavLinks>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
