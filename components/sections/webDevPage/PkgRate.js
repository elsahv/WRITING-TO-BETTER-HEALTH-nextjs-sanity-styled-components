import { ContactBtn } from "../../styles/buttons/ContactBtn.styled";
import content from "./data/pkgRate";
import styled from "styled-components";

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
    <>
      {/* PKGS CATERED TO DIETITIANS */}
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>Package Rate</h2>
      <div style={{ display: "flex", background: "teal" }}>
        {content.map((item, index) => (
          <div key={index} item={item}>
            <h4>{item.title}</h4>
            <div>{item.price}</div>
            <div>{item.listItem1}</div>
            <div>{item.listItem2}</div>
            <div>{item.listItem3}</div>
            <div>{item.listItem4}</div>
            <div>{item.listItem5}</div>
            <div>{item.listItem6}</div>
            <div>{item.listItem7}</div>
            <ContactBtn>contact cta</ContactBtn>
          </div>
        ))}
      </div>
    </>
  );
}
