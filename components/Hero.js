import Image from "next/image";
import Link from "next/link";
import { Grid, LeftSide, RightSide } from "./styles/Grid.styled";
import { ImgWrapper } from "./styles/images/SectionImages.styled";
import { ContactBtn } from "./styles/buttons/ContactBtn.styled";
import img1 from "../public/images/sketch2.jpg";
import styled from "styled-components";

export const HeroContent = styled.div`
  // background: red;
  height: 100vh;
  padding-top: 30%;
  padding-left: 40px;
  li {
    padding-top: 5px;
    padding-left: 10px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 0px;
    height: 80%;
  }
  @media only screen and (max-width: 600px) {
    // padding: 50px 0 30px 40px;
  }
`;

export const Headline = styled.h4`
  font-size: 45px;
  @media only screen and (max-width: 1024px) {
  font-size: 27px;
  }
 
    @media only screen and (max-width: 834px) {
      // font-size: 20px;
      }
}
`;

export default function Hero() {
  return (
    <>
      <Grid>
        <LeftSide>
          <HeroContent>
            <div>
              <h1>Web Design for Nutritional Professionals</h1>
              <h2>Stand out amongst the facebook diets fads and fake news.</h2>
              <p>
                I build websites for nutritional professionals and students. In
                exchange, I can:
              </p>
              <ul>
                <li>bring more clients to your practice</li>
                <li>nutrition education</li>
                <li>make your business more profitable</li>
              </ul>
              <ContactBtn
                style={{
                  marginTop: "15px",
                  background: "teal",
                  color: "aquamarine",
                }}
              >
                <Link href="/contact">Ready to get started? Lets goooo!</Link>
              </ContactBtn>
            </div>
          </HeroContent>
        </LeftSide>
        <RightSide>
          <ImgWrapper>
            <Image
              src={img1}
              alt="about-me"
              layout="responsive"
              className="img"
            />
          </ImgWrapper>
        </RightSide>
      </Grid>
    </>
  );
}
