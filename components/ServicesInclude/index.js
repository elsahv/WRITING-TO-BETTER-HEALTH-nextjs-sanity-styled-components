import Image from "next/image";
import { Grid, LeftSide, RightSide } from "../styles/Grid.styled";
import img1 from "../../public/images/sketch2.jpg";
import { SmImgWrapper } from "../styles/images/SectionImages.styled";
import { ContactBtn } from "../styles/buttons/ContactBtn.styled";
import Accordian from "../Accordian";
import content from "./data";
import { BannerTitle, ContactBtnsWrapper } from "./ServicesInclude.styled";

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
