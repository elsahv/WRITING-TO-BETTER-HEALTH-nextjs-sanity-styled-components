import { ThreeCol, Left, Middle, Right } from "../../styles/ThreeCol.styled";
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
  // display: flex;
  // justify-content: center;
  // flex-direction: column;
  background: teal;
  color: aquamarine;
  text-shadow: 1px 1px 1px #000;
  width: 100%;
  padding: 20px 0 20px 300px;
  button {
  }
`;

const EmailCTABtn = styled.button`
  background: coral;
  color: teal;
  border: solid 1px #000;
  padding: 10px 15px;
  margin-top: 30px;
  cursor: pointer;
  font-size: 18px;
  // border-radius: 25px;
  &:hover {
    color: teal;
    background: aquamarine;
    transition: 1s;
  }
`;

export default function DevDesignProcess() {
  return (
    <div>
      <Banner>Development/ Design Process</Banner>
      <ThreeCol style={{ padding: "40px 160px", textAlign: "center" }}>
        <Left>
          <h4>Contact</h4>
          img
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt vero
            quaerat rerum soluta hic? Doloremque, aperiam. Totam reprehenderit
            explicabo officiis soluta quos, eveniet sit repudiandae tempora illo
            consectetur? Illum, soluta?
          </p>
        </Left>
        <Middle>
          <h4>Web Design</h4>
          img
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt vero
            quaerat rerum soluta hic? Doloremque, aperiam. Totam reprehenderit
            explicabo officiis soluta quos, eveniet sit repudiandae tempora illo
            consectetur? Illum, soluta?
          </p>
        </Middle>
        <Right>
          <h4>Service & Support</h4>
          img
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
          <h2 style={{ fontSize: "35px" }}>Lets gets started</h2>
          <EmailCTABtn>Lets go!</EmailCTABtn>
        </BottomCTA>
      </>
    </div>
  );
}
