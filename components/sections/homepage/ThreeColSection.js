import { ThreeCol, Left, Middle, Right } from "../../styles/ThreeCol.styled";
import { RiPlantLine } from "react-icons/ri";
import { FcSmartphoneTablet, FcComboChart } from "react-icons/fc";
import styled from "styled-components";

const Sq = styled.div`
  border: solid 2px black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 20px 50px 20px;
`;
const IconWrapper = styled.div`
  font-size: 45px;
`;

const Content = styled.p`
  @media only screen and (max-width: 834px) {
    font-size: 15px;
    padding-bottom: 20px;
  }
`;
export default function ThreeColumnSection() {
  return (
    <div>
      <ThreeCol style={{ margin: "20px" }}>
        <Left>
          <Sq style={{ background: "teal" }}>
            <IconWrapper>
              <FcSmartphoneTablet />
            </IconWrapper>
            <h4>Mobile Friendly</h4>
            <Content>
              Lorem iContentsum dolor sit amet, consectetur adipisicing elit.
              Sunt vero quaerat rerum soluta hic? Doloremque, aperiam. Totam
              reprehenderit explicabo officiis soluta quos, eveniet sit
              repudiandae tempora illo consectetur? Illum, soluta?
            </Content>
          </Sq>
        </Left>
        <Middle>
          <Sq style={{ background: "orange" }}>
            <IconWrapper>
              <FcComboChart />
            </IconWrapper>
            <h4>SEO</h4>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              vero quaerat rerum soluta hic? Doloremque, aperiam. Totam
              reprehenderit explicabo officiis soluta quos, eveniet sit
              repudiandae tempora illo consectetur? Illum, soluta?
            </Content>
          </Sq>
        </Middle>
        <Right>
          <Sq style={{ background: "coral" }}>
            <IconWrapper>
              <RiPlantLine />
            </IconWrapper>

            <h4>Promise</h4>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              vero quaerat rerum soluta hic? Doloremque, aperiam. Totam
              reprehenderit explicabo officiis soluta quos, eveniet sit
              repudiandae tempora illo consectetur? Illum, soluta?
            </Content>
          </Sq>
        </Right>
      </ThreeCol>
    </div>
  );
}
