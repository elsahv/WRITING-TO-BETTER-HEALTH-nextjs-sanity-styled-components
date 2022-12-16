import Link from "next/link";

import { ThreeCol, Left, Middle, Right } from "../../styles/ThreeCol.styled";
import { ContactBtn } from "../../styles/buttons/ContactBtn.styled";
import { GrContact, GrPersonalComputer } from "react-icons/gr";
import { MdOutlineContactSupport } from "react-icons/md";
import styled from "styled-components";
import content from "../../../data/homePage/devdesign";

const DevDesignsWrapper = styled.div`
  padding: 20px 100px;
  margin: 30px 0;
  @media only screen and (max-width: 1024px) {
    padding: 0 10px;
    p {
      font-size: 15px;
    }
  }
  @media only screen and (max-width: 600px) {
    padding: 0 50px;
  }
`;

const Banner = styled.div`
  display: flex;
  justify-content: center;
  background: teal;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  width: 100%;
  // height: 50px;
  padding: 20px 0;
  font-size: 20px;
`;

const Title = styled.h4`
  font-size: 30px;
  @media only screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;

const IconWrapper = styled.div`
  font-size: 45px;
  @media only screen and (max-width: 1024px) {
    font-size: 40px;
  }
`;
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
