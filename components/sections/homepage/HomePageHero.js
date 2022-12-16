import Image from "next/image";
import Link from "next/link";

import { Grid, LeftSide, RightSide } from "../../styles/Grid.styled";
import { ImgWrapper } from "../../styles/images/SectionImages.styled";
import { ContactBtn } from "../../styles/buttons/ContactBtn.styled";
import img1 from "../../../public/images/sketch2.jpg";
import content from "../../../data/homePage/hero";
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

export default function Hero({
  headline1,
  headline2,
  listItem1,
  listItem2,
  listItem3,
  ctaBtn,
}) {
  return (
    <>
      <Grid>
        <LeftSide>
          <HeroContent>
            <div>
              {content.map((item, index) => (
                <div key={index} item={item}>
                  <h2>{item.headline1}</h2>
                  <Headline>{item.headline2}</Headline>
                  <p>{item.businessGoal}</p>
                  <ul>
                    <li>{item.listItem1}</li>
                    <li>{item.listItem2}</li>
                    <li>{item.listItem3}</li>
                  </ul>
                  <ContactBtn
                    style={{
                      marginTop: "10px",
                      background: "teal",
                      color: "aquamarine",
                    }}
                  >
                    <Link href="/contact">{item.ctaBtn}</Link>
                  </ContactBtn>
                </div>
              ))}
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
