import { Grid, LeftSide, RightSide } from "../../styles/Grid.styled";

export default function HomeHero() {
  return (
    <Grid>
      <LeftSide>
        <h2>Index Hero</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt vero
          quaerat rerum soluta hic? Doloremque, aperiam. Totam reprehenderit
          explicabo officiis soluta quos, eveniet sit repudiandae tempora illo
          consectetur? Illum, soluta?
        </p>
        <button>button</button>
      </LeftSide>
      <RightSide>pic</RightSide>
    </Grid>
  );
}
