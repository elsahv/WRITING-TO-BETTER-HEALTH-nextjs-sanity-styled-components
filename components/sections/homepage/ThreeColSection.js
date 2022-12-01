import { ThreeCol, Left, Middle, Right } from "../../styles/ThreeCol.styled";
import { FaBeer } from "react-icons/fa";
import styled from "styled-components";

const Sq = styled.div`
  border: solid 2px black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 350px;
  p {
    padding: 0 25px;
  }
`;
export default function ThreeColumnSection() {
  return (
    <div>
      {/* 
        //TODO THREE GRID */}
      <ThreeCol style={{ margin: "20px" }}>
        <Left>
          <Sq style={{ background: "teal" }}>
            <FaBeer />
            <h4>Mobile Friendly</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              vero quaerat rerum soluta hic? Doloremque, aperiam. Totam
              reprehenderit explicabo officiis soluta quos, eveniet sit
              repudiandae tempora illo consectetur? Illum, soluta?
            </p>
          </Sq>
        </Left>
        <Middle>
          <Sq style={{ background: "coral" }}>
            <FaBeer />
            <h4>SEO</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              vero quaerat rerum soluta hic? Doloremque, aperiam. Totam
              reprehenderit explicabo officiis soluta quos, eveniet sit
              repudiandae tempora illo consectetur? Illum, soluta?
            </p>
          </Sq>
        </Middle>
        <Right>
          <Sq style={{ background: "orange" }}>
            <FaBeer />
            <h4>Promise</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              vero quaerat rerum soluta hic? Doloremque, aperiam. Totam
              reprehenderit explicabo officiis soluta quos, eveniet sit
              repudiandae tempora illo consectetur? Illum, soluta?
            </p>
          </Sq>
        </Right>
      </ThreeCol>
      {/* 
        //TODO END THREE GRID */}
    </div>
  );
}
