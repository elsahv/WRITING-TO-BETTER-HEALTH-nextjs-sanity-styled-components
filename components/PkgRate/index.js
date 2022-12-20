import content from "./data";
import { ThreeCol } from "../styles/ThreeCol.styled";
import { Wrapper, Title, Sq } from "./PkgRate.styled";

export default function PkgRate({
  title,
  price,
  listItem1,
  listItem2,
  listItem3,
  listItem4,
  listItem5,
  listItem6,
  listItem7,
}) {
  return (
    <Wrapper>
      {/* PKGS CATERED TO DIETITIANS */}
      <Title>Package Rate</Title>
      <div style={{ padding: "0px 45px 50px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        temporibus quae corrupti, magni obcaecati consequuntur, maxime at
        sapiente quasi tenetur deserunt! Possimus voluptate ut est incidunt
        porro voluptas tenetur voluptatum.
      </div>
      <ThreeCol>
        {content.map((item, index) => (
          <div key={index} item={item}>
            <Sq>
              <h4
                style={{
                  // color: "teal",
                  textDecoration: "",
                  fontSize: "25px",
                }}
              >
                {item.title}
              </h4>
              <div>{item.price}</div>
              <ul>
                <li>{item.listItem1}</li>
                <li>{item.listItem2}</li>
                <li>{item.listItem3}</li>
                <li>{item.listItem4}</li>
                <li>{item.listItem5}</li>
                <li>{item.listItem6}</li>
                <li>{item.listItem7}</li>
              </ul>
            </Sq>
          </div>
        ))}
      </ThreeCol>
    </Wrapper>
  );
}
