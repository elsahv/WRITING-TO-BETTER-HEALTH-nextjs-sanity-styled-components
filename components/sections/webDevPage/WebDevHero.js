import Image from "next/image";
import { Grid, LeftSide, RightSide } from "../../styles/Grid.styled";
import img1 from "../../../public/images/sketch2.jpg";

import styled from "styled-components";

// STYLES
const Banner = styled.div`
  text-align: center;
  background: teal;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  padding: 100px 0;
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
        <h2 style={{ fontSize: "35px" }}>
          What goes into a nutrition website?
        </h2>
        <p style={{ fontSize: "25px" }}>
          Pretty much everything you need to get your business online
        </p>
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
          </WhyChooseWTBH>
        </LeftSide>
        <RightSide>
          <Image
            src={img1}
            alt="about-me"
            // layout="responsive"
            className="img"
            style={{ width: "100%", height: "700px" }}
          />
        </RightSide>
      </Grid>
    </>
  );
}
