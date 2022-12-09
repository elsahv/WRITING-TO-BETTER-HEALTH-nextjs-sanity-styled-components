import { ThreeCol } from "../../styles/ThreeCol.styled";
import { RiPlantLine } from "react-icons/ri";
import { FcSmartphoneTablet, FcComboChart } from "react-icons/fc";
import content from "./data/threeCol";
import styled from "styled-components";

const Sq = styled.div`
  border: solid 2px black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 20px 50px 20px;
  height: 200px;
`;
const IconWrapper = styled.div`
  font-size: 45px;
`;

export default function ThreeColumnSection({ title, contentBody, icon }) {
  return (
    <>
      <ThreeCol style={{ margin: "20px" }}>
        {content.map((item, index) => (
          <div key={index} item={item}>
            <Sq style={{ background: "teal" }}>
              {/* <IconWrapper> */}
              {item.icon}
              {/* <FcSmartphoneTablet /> */}
              {/* </IconWrapper> */}
              {/* <FcComboChart /> */}
              {/* <RiPlantLine /> */}

              <h4>{item.title}</h4>
              <p>{item.contentBody}</p>
            </Sq>
          </div>
        ))}
      </ThreeCol>
    </>
  );
}
