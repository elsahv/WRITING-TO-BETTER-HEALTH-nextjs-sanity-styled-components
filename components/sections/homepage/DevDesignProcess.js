import { ThreeCol, Left, Middle, Right } from "../../styles/ThreeCol.styled";
import { ContactBtn } from "../../styles/Button.styled";
import { GrContact, GrPersonalComputer } from "react-icons/gr";
import { MdOutlineContactSupport } from "react-icons/md";
import styled from "styled-components";

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

const BottomCTA = styled.div`
  background-image: url("/images/sketch3.jpg");
  // background-repeat: no-repeat;
  border-top: solid 1px #000;
  color: #fff;
  text-shadow: 3px 3px 3px #000;
  width: 100%;
  padding: 60px 0 20px 300px;
  height: 250px;
`;

const Title = styled.h4`
  font-size: 30px;
`;

const IconWrapper = styled.div`
  font-size: 65px;
`;
export default function DevDesignProcess() {
  return (
    <div>
      <Banner>Development/ Design Process</Banner>
      <ThreeCol
        style={{ padding: "40px 160px", textAlign: "center", margin: "30px 0" }}
      >
        <Left>
          <Title>Contact</Title>
          <IconWrapper>
            <GrContact />
          </IconWrapper>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt vero
            quaerat rerum soluta hic? Doloremque, aperiam. Totam reprehenderit
            explicabo officiis soluta quos, eveniet sit repudiandae tempora illo
            consectetur? Illum, soluta?
          </p>
        </Left>
        <Middle>
          <Title>Web Design</Title>
          <IconWrapper>
            <GrPersonalComputer />
          </IconWrapper>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt vero
            quaerat rerum soluta hic? Doloremque, aperiam. Totam reprehenderit
            explicabo officiis soluta quos, eveniet sit repudiandae tempora illo
            consectetur? Illum, soluta?
          </p>
        </Middle>
        <Right>
          <Title>Service & Support</Title>
          <IconWrapper>
            <MdOutlineContactSupport />
          </IconWrapper>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt vero
            quaerat rerum soluta hic? Doloremque, aperiam. Totam reprehenderit
            explicabo officiis soluta quos, eveniet sit repudiandae tempora illo
            consectetur? Illum, soluta?
          </p>
        </Right>
      </ThreeCol>
      <>
        <BottomCTA>
          <h2 style={{ fontSize: "40px" }}>Lets gets started</h2>
          <ContactBtn style={{ background: "coral" }}>Lets go!</ContactBtn>
        </BottomCTA>
      </>
    </div>
  );
}
