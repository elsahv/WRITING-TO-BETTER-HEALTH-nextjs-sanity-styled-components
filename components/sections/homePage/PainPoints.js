import { Grid, LeftSide, RightSide } from "../../styles/Grid.styled";

export default function HomeHero() {
  return (
    <Grid>
      <LeftSide>pic</LeftSide>
      <RightSide>
        <h4>List of pain points</h4>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
      </RightSide>
    </Grid>
  );
}
