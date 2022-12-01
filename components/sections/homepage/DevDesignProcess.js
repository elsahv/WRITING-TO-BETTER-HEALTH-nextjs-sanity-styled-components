import { ThreeCol, Left, Middle, Right } from "../../styles/ThreeCol.styled";
import styled from "styled-components";

const Banner = styled.div`
  display: flex;
  justify-content: center;
  background: teal;
  width: 100%;
  height: 50px;
`;

const BottomCTA = styled.div`
  // display: flex;
  // justify-content: center;
  // flex-direction: column;
  background: teal;
  width: 100%;
  height: 50px;
  button {
  }
`;

export default function DevDesignProcess() {
  return (
    <div>
      {/* //todo END SECTION 3 */}
      <Banner>Banner</Banner>
      <ThreeCol>
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
          <h2>Lets gets started</h2>
          <button>Lets go!</button>
        </BottomCTA>
      </>
      {/* //todo END SECTION 3 */}
    </div>
  );
}
