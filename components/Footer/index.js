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
              <ul>
                <li
                  style={{
                    textDecoration: "underline",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Sitemap
                </li>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                {/* <li>
                  Writing to Better Health | Copyright &copy;{" "}
                  {today.getFullYear()}
                </li> */}
              </ul>
              <p>
                Writing to Better Health | Copyright &copy;{" "}
                {today.getFullYear()}
              </p>
            </FooterlinksContainer>
          </RightSide>
        </Grid>
      </FooterWrapper>
    </>
  );
}

export default FooterSection;
