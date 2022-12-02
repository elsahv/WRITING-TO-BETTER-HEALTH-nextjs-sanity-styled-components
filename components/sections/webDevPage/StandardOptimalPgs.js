import { Grid, LeftSide, RightSide } from "../../styles/Grid.styled";
import styled from "styled-components";

const StandardOptions = styled.div`
  background: coral;
  text-align: center;
`;
const OptimalPgs = styled.div`
  background: teal;
  text-align: center;
`;
export default function MthlyServices() {
  return (
    <>
      <Grid>
        <LeftSide>
          <StandardOptions>
            <h2>Standard Options</h2>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
          </StandardOptions>
        </LeftSide>
        <RightSide>
          <OptimalPgs>
            <h2>Optimal Pages</h2>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
          </OptimalPgs>
        </RightSide>
      </Grid>
    </>
  );
}
