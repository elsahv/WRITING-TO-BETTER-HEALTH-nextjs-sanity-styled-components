import Image from "next/image";
import { Grid, LeftSide, RightSide } from "../../styles/Grid.styled";
import img1 from "../../../public/images/sketch2.jpg";
import { SmImgWrapper } from "../../styles/images/SectionImages.styled";
import { ContactBtn } from "../../styles/buttons/ContactBtn.styled";
import Accordian from "../../accordians/ServicesIncludeAccordian";
import styled from "styled-components";
import content from "./data/webDevHero";

// STYLES

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

const ContactBtnsWrapper = styled.div`
  // background: green;
  margin-top: 20px;
  width: 260px;
  display: flex;
  justify-content: space-between;
`;

//END STYLES

export default function WebDevHero({ title, headline, p1, p2 }) {
  return (
    <>
      <Grid>
        <LeftSide>
          <div style={{ padding: "100px 150px" }}>
            {content.map((item, index) => (
              <div key={item} item={item}>
                <BannerTitle>{item.title}</BannerTitle>
                <p>{item.p1}</p>
                <h2>{item.headline}</h2>

                <Accordian />
              </div>
            ))}

            <ContactBtnsWrapper>
              <ContactBtn>See packages</ContactBtn>
              <ContactBtn>Contact</ContactBtn>
            </ContactBtnsWrapper>
          </div>
        </LeftSide>
        <RightSide>
          <SmImgWrapper>
            <Image
              src={img1}
              alt="about-me"
              layout="responsive"
              className="img"
              // height="100px"
              // width="200px"
            />
          </SmImgWrapper>
        </RightSide>
      </Grid>
    </>
  );
}
