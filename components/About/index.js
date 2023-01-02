import Image from "next/image";
import { Grid, LeftSide, RightSide } from "../styles/Grid.styled";
import { ImgWrapper } from "../styles/images/SectionImages.styled";
import img2 from "../../public/images/sketch2.jpg";
import content from "./data";
import styled from "styled-components";

export const Container = styled.div`
  padding: 100px 50px 0;
  // background-color: orange;
  @media only screen and (max-width: 1024px) {
    padding: 0;
  }
`;

export default function SellingPoints({ headline1, headline2, p1, p2, p3 }) {
  return (
    <>
      <Grid>
        <LeftSide>
          {content.map((item, index) => (
            <div key={index} item={item}>
              <Container>
                <h2>{item.headline1}</h2>
                <p>{item.headline2}</p>
                <p>{item.p1}</p>
                <p>{item.p2}</p>
                <p>{item.p3}</p>
              </Container>
            </div>
          ))}
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
        \
      </Grid>
    </>
  );
}
