import Image from "next/image";
import { Grid, LeftSide, RightSide } from "../../styles/Grid.styled";
import { ImgWrapper } from "../../styles/Images.styled";

import { ContactBtn } from "../../styles/Buttons/ContactBtn.styled";
import img1 from "../../../public/images/sketch2.jpg";
import styled from "styled-components";

const HeroContent = styled.div`
  // background: red;
  padding-top: 30%;
  padding-left: 40px;
  li {
    padding-top: 5px;
    padding-left: 10px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 80px 60px;
    // margin-top: 50px;
  }
  @media only screen and (max-width: 600px) {
    // padding: 50px 0 30px 40px;
  }
`;

const Headline = styled.h4`
  font-size: 45px;
  @media only screen and (max-width: 1024px) {
  font-size: 30px;
  }
 
    @media only screen and (max-width: 834px) {
      font-size: 20px;

      }

}
`;

export default function Hero() {
  return (
    <div>
      <Grid>
        <LeftSide>
          <HeroContent>
            <span> Web Design for Nutritional Professionals</span>
            <Headline>
              Stand out amongst the facebook diets fads and fake news.
            </Headline>
            <p>I can help by building websites. Here is how:</p>
            <ul>
              <li>bring more clients to your practice</li>
              <li>nutrition education</li>
              <li>make your business more profitable</li>
            </ul>
            <ContactBtn
              style={{
                marginTop: "10px",
                background: "teal",
                color: "aquamarine",
              }}
            >
              Ready to get started? Lets goooo!
            </ContactBtn>
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
    </div>
  );
}
