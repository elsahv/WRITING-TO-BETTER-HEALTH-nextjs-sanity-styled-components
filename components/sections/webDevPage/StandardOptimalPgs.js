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
          <div style={{ marginTop: "40px", padding: "50px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque
            eveniet earum quod tempore quasi, veniam corrupti omnis natus, optio
            ad, accusantium enim accusamus! Autem cumque veniam reiciendis est
            sequi.
            <ContactBtn style={{ margin: "0px 10px" }}>contact cta</ContactBtn>
          </div>
        </LeftSide>
        <RightSide style={{ display: "flex", flexDirection: "column" }}>
          {content.map((item, index) => (
            <div key={index} item={item}>
              <StandardOptimalSq>
                <StandardOptimalTitle>{item.title}</StandardOptimalTitle>
                <ul>
                  <li>{item.listItem1}</li>
                  <li>{item.listItem2}</li>
                  <li>{item.listItem3}</li>
                  <li>{item.listItem4}</li>
                  <li>{item.listItem5}</li>
                  <li>{item.listItem6}</li>
                  <li>{item.listItem7}</li>
                  <li>{item.listItem8}</li>
                </ul>
              </StandardOptimalSq>
            </div>
          ))}
        </RightSide>
      </Grid>
    </>
  );
}
