import Image from "next/image";
import { Grid, LeftSide, RightSide } from "../styles/Grid.styled";
import { SmImgWrapper } from "../styles/images/SectionImages.styled";
import img2 from "../../public/images/sketch2.jpg";
import content from "./data";
import { SellingPts } from "./AboutSection.styled";

export default function SellingPoints({ headline1, headline2, p1, p2, p3 }) {
  return (
    <>
      <Grid style={{ padding: "40px 0" }}>
        <LeftSide>
          {content.map((item, index) => (
            <div key={index} item={item}>
              <SellingPts>
                <h2>{item.headline1}</h2>
                <h2>{item.headline2}</h2>
                <p>{item.p1}</p>
                <p>{item.p2}</p>
                <p>{item.p3}</p>
              </SellingPts>
            </div>
          ))}
        </LeftSide>
        <RightSide>
          <SmImgWrapper>
            <Image
              src={img2}
              alt="about-me"
              layout="responsive"
              className="img"
            />
          </SmImgWrapper>
        </RightSide>
        \
      </Grid>
    </>
  );
}
