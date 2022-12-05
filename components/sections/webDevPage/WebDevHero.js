import Image from "next/image";
import { Grid, LeftSide, RightSide } from "../../styles/Grid.styled";
import img1 from "../../../public/images/sketch2.jpg";
import { ImgWrapper } from "../../styles/images/SectionImages.styled";
import { ContactBtn } from "../../styles/buttons/ContactBtn.styled";

import styled from "styled-components";

// STYLES
const Banner = styled.div`
  text-align: center;
  background: teal;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  padding: 100px 0;
  @media only screen and (max-width: 1024px) {
    padding: 50px 0;
  }
`;

const BannerTitle = styled.h2`
  font-size: 35px;
  @media only screen and (max-width: 834px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 401px) {
    font-size: 20px;
    padding-bottom: 10px;
  }
`;

const BannerHeadline = styled.span`
  font-size: 25px;
  @media only screen and (max-width: 834px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 17px;
  }
  @media only screen and (max-width: 401px) {
    padding: 10px 20px;
  }
`;

const WhyChooseWTBH = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 50px 0;
`;

//END STYLES

export default function WebDevHero() {
  return (
    <>
      <Banner>
        <BannerTitle>What goes into a nutrition website?</BannerTitle>
        <BannerHeadline>
          Pretty much everything you need to get your business online
        </BannerHeadline>
      </Banner>

      <Grid>
        <LeftSide>
          <WhyChooseWTBH>
            <h2>With you from beginning to end</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              vero quaerat rerum soluta hic? Doloremque, aperiam. Totam
              reprehenderit explicabo officiis soluta quos, eveniet sit
              repudiandae tempora illo consectetur? Illum, soluta?
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                // background: "teal",
                width: "270px",
              }}
            >
              <ContactBtn>see packages</ContactBtn>
              <ContactBtn>Contact</ContactBtn>
            </div>
          </WhyChooseWTBH>
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
