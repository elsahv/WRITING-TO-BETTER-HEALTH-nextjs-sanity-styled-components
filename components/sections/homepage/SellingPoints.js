import Image from "next/image";
import { Grid, LeftSide, RightSide } from "../../styles/Grid.styled";
import { ImgWrapper } from "../../styles/images/SectionImages.styled";
import img2 from "../../../public/images/sketch2.jpg";
import styled from "styled-components";

const PainPts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
`;

const SellingPts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 50px 0;

  @media only screen and (max-width: 600px) {
    padding-bottom: 50px;
  }
`;

export default function SellingPoints() {
  return (
    <div>
      <Grid>
        <LeftSide>
          <ImgWrapper>
            <Image
              src={img2}
              alt="about-me"
              layout="responsive"
              className="img"
            />
          </ImgWrapper>
        </LeftSide>
        <RightSide>
          <PainPts>
            <h4>List of pain points</h4>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
            </ul>
          </PainPts>
        </RightSide>
      </Grid>
      <Grid style={{ padding: "40px 0" }}>
        <LeftSide>
          <SellingPts>
            <h2>How I can help</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              vero quaerat rerum soluta hic? Doloremque, aperiam. Totam
              reprehenderit explicabo officiis soluta quos, eveniet sit
              repudiandae tempora illo consectetur? Illum, soluta?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              vero quaerat rerum soluta hi soluta quos, eveniet sit repudiandae
              tempora illo consectetur? Illum, soluta?
            </p>
          </SellingPts>
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
    </div>
  );
}
