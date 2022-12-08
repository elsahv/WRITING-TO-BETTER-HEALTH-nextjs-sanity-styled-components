import content from "./data/firstSellingPt";
import styled from "styled-components";

const CTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default function ThreeColumnSection({
  headline1,
  headline2,
  headline3,
}) {
  return (
    <>
      <CTA>
        <div>
          {content.map((item, index) => (
            <div key={index} item={item}>
              <h4>{item.headline1}</h4>
              <h2>{item.headline2}</h2>
              <p>{item.headline3}</p>
            </div>
          ))}
        </div>
      </CTA>
    </>
  );
}
