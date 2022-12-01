import { Grid, LeftSide, RightSide } from "../components/styles/Grid.styled";

export default function webDevelopment() {
  return (
    <>
      {/* //todo SECTION 1 */}
      <h2 style={{ textAlign: "center" }}>HERO SECTION</h2>

      <Grid>
        <LeftSide>
          <h2>Main Headline</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt vero
            quaerat rerum soluta hic? Doloremque, aperiam. Totam reprehenderit
            explicabo officiis soluta quos, eveniet sit repudiandae tempora illo
            consectetur? Illum, soluta?
          </p>
        </LeftSide>
        <RightSide>pic</RightSide>
      </Grid>
      {/* //todo SECTION 1 */}

      {/* //todo SECTION 2 */}
      <Grid>
        <LeftSide>
          <h2>SERVICES INCLUDE</h2>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </LeftSide>
        <RightSide>
          <h2>SERVICES INCLUDE</h2>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </RightSide>
      </Grid>

      <Grid>
        <LeftSide>pic</LeftSide>
        <RightSide>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt vero
            quaerat rerum soluta hic? Doloremque, aperiam. Totam reprehenderit
            explicabo officiis soluta quos, eveniet sit repudiandae tempora illo
            consectetur? Illum, soluta?
          </p>
        </RightSide>
      </Grid>

      <Grid>
        <LeftSide>
          <h2>MONTHLY UPDATES</h2>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </LeftSide>
        <RightSide>
          <h2>MONTHLY UPDATES</h2>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </RightSide>
      </Grid>

      {/* //todo END SECTION 2 */}

      {/* //todo SECTION 3 */}
      <h2 style={{ textAlign: "center" }}>PKG RATE </h2>

      <Grid>
        <LeftSide>
          <h2>STANDARD OPTIMAL PGS</h2>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </LeftSide>
        <RightSide>
          <h2>STANDARD OPTIMAL PGS</h2>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </RightSide>
      </Grid>

      {/* //todo END SECTION 3 */}
    </>
  );
}
