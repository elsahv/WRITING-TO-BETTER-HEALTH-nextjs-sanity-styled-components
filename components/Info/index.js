import content from "./data";
import { ThreeCol } from "../styles/ThreeCol.styled";
import { RiPlantLine } from "react-icons/ri";
import { FcSmartphoneTablet, FcComboChart } from "react-icons/fc";
import {
  CTA,
  Title,
  Headline1,
  Headline2,
  Sq,
  IconWrapper,
} from "./Info.styled";

export default function ThreeColumnSection({ title, contentBody, icon }) {
  return (
    <>
      <CTA>
        <Title>
          Dietitians and nutritional professionals have one goal: To better
          peoples health and life-style diets.
        </Title>
        {/* <Headline1>To better peoples health and life-style diets</Headline1> */}
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
