import { Grid, LeftSide, RightSide } from "../../styles/Grid.styled";
import content from "./data/standardOptionalPg";
import { ContactBtn } from "../../styles/buttons/ContactBtn.styled";

import styled from "styled-components";

const StandardOptimalSq = styled.div`
  // background: green;
  // text-align: right;
`;

const StandardOptimalTitle = styled.h2`
  margin-top: 40px;
`;

export default function MthlyServices(
  title,
  listItem1,
  listItem2,
  listItem3,
  listItem4,
  listItem5,
  listItem6,
  listItem7,
  listItem8
) {
  return (
    <>
      <Grid>
        <LeftSide>
          <ContactBtn>contact cta</ContactBtn>
        </LeftSide>
        <RightSide style={{ display: "flex", flexDirection: "column" }}>
          {content.map((item, index) => (
            <div key={index} item={item}>
              <StandardOptimalSq>
                <StandardOptimalTitle>{item.title}</StandardOptimalTitle>
                <div>{item.listItem1}</div>
                <div>{item.listItem2}</div>
                <div>{item.listItem3}</div>
                <div>{item.listItem4}</div>
                <div>{item.listItem5}</div>
                <div>{item.listItem6}</div>
                <div>{item.listItem7}</div>
                <div>{item.listItem8}</div>
              </StandardOptimalSq>
            </div>
          ))}
        </RightSide>
      </Grid>
    </>
  );
}
