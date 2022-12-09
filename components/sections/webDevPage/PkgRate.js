import content from "./data/pkgRate";
import { ThreeCol } from "../../styles/ThreeCol.styled";
import styled from "styled-components";

const Wrapper = styled.div`
  // background: coral;
  padding: 30px 20px;
`;

const Title = styled.h2`
  padding-left: 50px;
  margin-bottom: 5px;
  font-size: 30px;
  color: teal;
  // text-shadow: 1px 1px 1px #000;
`;

const Sq = styled.div`
  // background: teal;
  color: #000;
  // text-shadow: 1px 1px 1px #000;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // border: solid 1px #000;
  text-align: center;
  li {
    border-bottom: solid 1px #000;
    list-style: none;
    padding: 2px 0;
  }
`;

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
      <ThreeCol>
        {content.map((item, index) => (
          <div key={index} item={item}>
            <Sq>
              <h4
                style={{
                  color: "teal",
                  // textShadow: "1px 1px 1px #000",
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
