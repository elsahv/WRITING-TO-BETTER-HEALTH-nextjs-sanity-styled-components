import Image from "next/image";
import { Grid, LeftSide, RightSide } from "../../styles/Grid.styled";
import { ContactBtn } from "../../styles/Button.styled";
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
`;

export default function Hero() {
  return (
    <div>
      <Grid style={{ height: "100vh" }}>
        <LeftSide>
          <HeroContent>
            <span> Web Design for Nutritional Professionals</span>
            <h2 style={{ fontSize: "45px" }}>
              Stand out amongst the facebook diets fads and fake news.
            </h2>
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
        <RightSide
          style={{
            // background: "aqua",
            display: "flex",
            justifyContent: "center",
            paddingTop: "150px",
          }}
        >
          <Image
            src={img1}
            alt="about-me"
            // layout="responsive"
            className="img"
            style={{ width: "100%", height: "700px" }}
          />
        </RightSide>
      </Grid>
    </div>
  );
}
