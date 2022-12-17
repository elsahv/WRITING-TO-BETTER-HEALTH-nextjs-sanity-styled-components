import Link from "next/link";

import { ThreeCol, Left, Middle, Right } from "../styles/ThreeCol.styled";
import { ContactBtn } from "../styles/buttons/ContactBtn.styled";
import { GrContact, GrPersonalComputer } from "react-icons/gr";
import { MdOutlineContactSupport } from "react-icons/md";
import content from "./data";
import {
  Banner,
  DevDesignsWrapper,
  Title,
  IconWrapper,
} from "./DevDesign.styled";

export default function DevDesignProcess() {
  return (
    <>
      <Banner>Development/ Design Process</Banner>
      <DevDesignsWrapper>
        <ThreeCol>
          {content.map((item, index) => (
            <div key={index} item={item}>
              <Title>{item.title}</Title>
              <IconWrapper>
                <GrContact />
              </IconWrapper>
              <p>{item.p1}</p>
              {/* <IconWrapper>
                  <GrPersonalComputer />
                </IconWrapper>  */}
              {/*              
                <IconWrapper>
                  <MdOutlineContactSupport />
                </IconWrapper> */}
            </div>
          ))}
        </ThreeCol>
        <div>
          <h2 style={{ fontSize: "40px" }}>Lets gets started</h2>
          <ContactBtn style={{ background: "coral" }}>
            <Link href="/contact">Lets go!</Link>
          </ContactBtn>
        </div>
      </DevDesignsWrapper>
    </>
  );
}
