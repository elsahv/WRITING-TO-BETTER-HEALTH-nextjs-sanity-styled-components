import Link from "next/link";
import { ContactBtn } from "../styles/buttons/ContactBtn.styled";
import {
  FooterWrapper,
  ContactCTATitle,
  FooterlinksContainer,
  Grid,
  LeftSide,
  RightSide,
} from "./Footer.styled";
const today = new Date();

function FooterSection() {
  return (
    <>
      <FooterWrapper>
        <Grid>
          <LeftSide>
            <ContactCTATitle>Lets gets started</ContactCTATitle>
            <ContactBtn>
              <Link href="/contact">Lets go!</Link>
            </ContactBtn>
          </LeftSide>

          <RightSide>
            <FooterlinksContainer>
              <ul style={{ listStyle: "none" }}>
                {/*
                  //TODO: Sitemap: add links when needed
                   */}
                {/* <li>Home</li> */}
                {/* <li>Web Development</li>
                <li>Blog</li> */}
                <Link href="/contact">Contact</Link>
                <li>
                  Writing to Better Health | Copyright &copy;{" "}
                  {today.getFullYear()}
                </li>
              </ul>
            </FooterlinksContainer>
          </RightSide>
        </Grid>
      </FooterWrapper>
    </>
  );
}

export default FooterSection;
