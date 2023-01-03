import content from "./data";
import { ThreeCol } from "../styles/ThreeCol.styled";
import { CTA, Sq } from "./Info.styled";
import Image from "next/image";
import { Grid, LeftSide, RightSide } from "../styles/Grid.styled";
import { ImgWrapper } from "../styles/images/SectionImages.styled";
import img2 from "../../public/images/sketch2.jpg";
import styled from "styled-components";

export const Container = styled.div`
  padding: 100px 50px 0;
  // background-color: orange;
  @media only screen and (max-width: 1024px) {
    padding: 0;
  }
`;

export default function ThreeColumnSection({ title, contentBody, icon }) {
  return (
    <>
      <CTA>
        <h2>
          Dietitians and nutritional professionals have one goal: To better
          peoples health and life-style diets.
        </h2>
        <p>
          However, it is hard to stand out amongst all the noise... Writing to
          Better Health changes this with these goals:
        </p>
      </CTA>

      {/*
     //TODO: ADD ICONS, FUTURE BACKGROUNDS: TEAL, ORANGE, CORAL 
     */}

      <ThreeCol style={{ margin: "20px" }}>
        {content.map((item, index) => (
          <div key={index} item={item}>
            <Sq style={{ background: "teal" }}>
              <h4>{item.title}</h4>
              <p>{item.contentBody}</p>
            </Sq>
          </div>
        ))}
      </ThreeCol>

      {/* BELOW */}
      <Grid>
        <LeftSide>
          <Container>
            <h2>So why choose Writing to Better Health?:</h2>
            <p>
              Your website is good hands with my experience in web hosting, web
              design, and education and passion in nutrition.
            </p>
            <p>My name is Elsa, I build and maintain websites for a living.</p>

            <p>So how does WTBH work? View process below.</p>
          </Container>
        </LeftSide>
        <RightSide>
          <ImgWrapper>
            <Image
              src={img2}
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
