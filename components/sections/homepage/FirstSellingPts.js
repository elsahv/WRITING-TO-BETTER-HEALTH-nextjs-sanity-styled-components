import content from "../../../data/threeCol";
import { ThreeCol } from "../../styles/ThreeCol.styled";
import { RiPlantLine } from "react-icons/ri";
import { FcSmartphoneTablet, FcComboChart } from "react-icons/fc";
import styled from "styled-components";

const CTA = styled.div`
  padding-left: 35px;
  padding-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 30px;
`;

const Headline1 = styled.h4`
  font-size: 22px;
`;

const Headline2 = styled.div`
  font-size: 20px;
  padding-top: 20px;
`;

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
      <CTA>
        <Title>Dietitians and nutritional professionals have one goal:</Title>
        <Headline1>To better peoples health and life-style diets</Headline1>
        <Headline2>
          However, it is hard to stand out amongst all the noise... Writing to
          Better Health changes this with these goals:
        </Headline2>
      </CTA>

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
