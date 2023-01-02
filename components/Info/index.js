import content from "./data";
import { ThreeCol } from "../styles/ThreeCol.styled";
import { RiPlantLine } from "react-icons/ri";
import { FcSmartphoneTablet, FcComboChart } from "react-icons/fc";
import { CTA, Sq } from "./Info.styled";

export default function ThreeColumnSection({ title, contentBody, icon }) {
  return (
    <>
      <CTA>
        <h2>
          Dietitians and nutritional professionals have one goal: To better
          peoples health and life-style diets.
        </h2>
        <p>
          However, it is hard to stand out amongst all the noise... Writing to
          Better Health changes this with these goals:
        </p>
      </CTA>

      {/*
     //TODO: ADD ICONS, FUTURE BACKGROUNDS: TEAL, ORANGE, CORAL 
     */}

      <ThreeCol style={{ margin: "20px" }}>
        {content.map((item, index) => (
          <div key={index} item={item}>
            <Sq style={{ background: "teal" }}>
              <h4>{item.title}</h4>
              <p>{item.contentBody}</p>
            </Sq>
          </div>
        ))}
      </ThreeCol>
    </>
  );
}
