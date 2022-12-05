import Link from "next/link";
import { Nav, Grid, Navlinks, ContactBtnWrapper } from "./styles/Header.styled";
import { ContactBtn } from "./styles/buttons/ContactBtn.styled";

export default function Header() {
  return (
    <>
      <Nav>
        <Grid>
          <Navlinks>
            <Link href="/" id="logo">
              Writing to Better Health
            </Link>
            <Link href="/web-development" className="nav-link">
              Web Development
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
          </Navlinks>

          <ContactBtnWrapper>
            <ContactBtn>Contact</ContactBtn>
          </ContactBtnWrapper>
        </Grid>
      </Nav>
    </>
  );
}
