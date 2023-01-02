import Image from "next/image";
import {
  ServicesGrid,
  AccordianWrapper,
  AccordianContainer,
  ServiceImgWrapper,
} from "./Services.styled";
import img1 from "../../public/images/sketch2.jpg";
import { ImgWrapper } from "../styles/images/SectionImages.styled";
import Accordian from "../Accordian";

export default function WebDevHero({ title, headline, p1, p2 }) {
  return (
    <>
      <ServicesGrid>
        <AccordianWrapper>
          <AccordianContainer>
            <Accordian />
          </AccordianContainer>
        </AccordianWrapper>
        <ServiceImgWrapper>
          <ImgWrapper>
            <Image
              src={img1}
              alt="about-me"
              layout="responsive"
              className="img"
            />
          </ImgWrapper>
        </ServiceImgWrapper>
      </ServicesGrid>
    </>
  );
}
