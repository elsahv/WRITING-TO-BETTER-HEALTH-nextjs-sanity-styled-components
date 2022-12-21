import Link from "next/link";
import { ContactBtn } from "../styles/buttons/ContactBtn.styled";
import { Grid, LeftSide, RightSide } from "../styles/Grid.styled";
import {
  FooterWrapper,
  ContactCTAWrapper,
  ContactCTATitle,
  ContactBtnWrapper,
  FooterlinksContainer,
} from "./Footer.styled";
function FooterSection() {
  return (
    <>
      <FooterWrapper>
        <Grid>
          <LeftSide>
            <ContactCTAWrapper>
              <ContactCTATitle>Lets gets started</ContactCTATitle>
              <ContactBtnWrapper>
                <ContactBtn>
                  <Link href="/contact">Lets go!</Link>
                </ContactBtn>
              </ContactBtnWrapper>
            </ContactCTAWrapper>
          </LeftSide>

          <RightSide>
            <FooterlinksContainer>
              <ul style={{ listStyle: "none" }}>
                <li
                  style={{
                    fontWeight: "bold",
                    // textDecoration: "underline",
                  }}
                >
                  Sitemap
                </li>
                {/* <li>Home</li> */}
                <li>Web Development</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Writing to Better Health | copyright @2022</li>
              </ul>
            </FooterlinksContainer>
          </RightSide>
        </Grid>
      </FooterWrapper>
    </>
  );
}

export default FooterSection;
