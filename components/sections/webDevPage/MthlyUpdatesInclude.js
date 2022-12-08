import Image from "next/image";
import { SmImgWrapper } from "../../styles/images/SectionImages.styled";
import { Grid, LeftSide, RightSide } from "../../styles/Grid.styled";
import img1 from "../../../public/images/sketch1.jpg";
import content from "./data/mthlyUpdatesInclude";

export default function MthlyUpdatesInclude({
  title,
  contentBody1,
  contentBody2,
  listItem,
}) {
  return (
    <>
      <Grid>
        <LeftSide>
          <SmImgWrapper>
            <Image
              src={img1}
              alt="about-me"
              layout="responsive"
              className="img"
            />
          </SmImgWrapper>
        </LeftSide>
        <RightSide
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {content.map((item, index) => (
            <div key={index} item={item}>
              <h2>{item.title}</h2>
              <p>{item.contentBody1}</p>
              <div>{item.listItem}</div>
              <p>{item.contentBody2}</p>
            </div>
          ))}
        </RightSide>
      </Grid>
    </>
  );
}
