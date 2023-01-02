import Link from "next/link";

import { ThreeCol, Left, Middle, Right } from "../styles/ThreeCol.styled";
import { GrContact, GrPersonalComputer } from "react-icons/gr";
import { MdOutlineContactSupport } from "react-icons/md";
import content from "./data";
import { Banner, DevDesignsWrapper, Title, IconWrapper } from "./CTA.styled";

export default function DevDesignProcess() {
  return (
    <>
      <Banner>Development/ Design Process</Banner>
      <DevDesignsWrapper>
        <ThreeCol>
          {content.map((item, index) => (
            <div key={index} item={item}>
              <Title>{item.title}</Title>
              {/* 
              //TODO: ADD ICON TO EACH SQ 
              */}
              <p>{item.p1}</p>
            </div>
          ))}
        </ThreeCol>
      </DevDesignsWrapper>
    </>
  );
}
