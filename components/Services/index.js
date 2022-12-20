import Image from "next/image";
import {
  ServicesGrid,
  ServiceLeft,
  LeftWrapper,
  ServicesTitle,
  ServiceRight,
} from "./Services.styled";
import img1 from "../../public/images/sketch2.jpg";
import { SmImgWrapper } from "../styles/images/SectionImages.styled";
import Accordian from "../Accordian";

export default function WebDevHero({ title, headline, p1, p2 }) {
  return (
    <>
      <ServicesGrid>
        <ServiceLeft>
          <LeftWrapper>
            <ServicesTitle>
              Services Include- click on links for more info
            </ServicesTitle>
            <Accordian />
          </LeftWrapper>
        </ServiceLeft>
        <ServiceRight>
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
        </ServiceRight>
      </ServicesGrid>
    </>
  );
}
