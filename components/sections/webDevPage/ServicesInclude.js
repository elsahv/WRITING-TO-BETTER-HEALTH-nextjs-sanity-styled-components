import Image from "next/image";
import { Grid, LeftSide, RightSide } from "../../styles/Grid.styled";
import img1 from "../../../public/images/sketch1.jpg";

import styled from "styled-components";

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ServicesInclude() {
  return (
    <div>
      <Banner>Every website setup includes:</Banner>
      <Grid style={{ background: "teal", opacity: "0.8" }}>
        <LeftSide style={{ textAlign: "center" }}>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </LeftSide>
        <RightSide style={{ textAlign: "center" }}>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </RightSide>
      </Grid>

      <Grid>
        <LeftSide>
          <Image
            src={img1}
            alt="about-me"
            // layout="responsive"
            className="img"
            style={{ width: "70%", height: "600px" }}
          />
        </LeftSide>
        <RightSide>
          <h2>Keeping things fresh</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt vero
            quaerat rerum soluta hic? Doloremque, aperiam. Totam reprehenderit
            explicabo officiis soluta quos, eveniet sit repudiandae tempora illo
            consectetur? Illum, soluta?
          </p>
        </RightSide>
      </Grid>

      <Banner>Monthly Updates</Banner>
      <Grid style={{ background: "coral", opacity: "0.8" }}>
        <LeftSide style={{ textAlign: "right", paddingRight: "50px" }}>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </LeftSide>
        <RightSide style={{ textAlign: "left", paddingRight: "50px" }}>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </RightSide>
      </Grid>
    </div>
  );
}
