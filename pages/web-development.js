import StandardOptimalPgs from "../components/sections/webDevPage/StandardOptimalPgs";
import PkgRate from "../components/sections/webDevPage/PkgRate";
import ServicesInclude from "../components/sections/webDevPage/ServicesInclude";
import styled from "styled-components";

import { Banner, BlogPageTitle } from "../components/styles/PageBanner.styled";
export default function webDevelopment() {
  return (
    <>
      <Banner>
        <BlogPageTitle>Web Dev</BlogPageTitle>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at,
          voluptates corporis quia a placeat asperiores ratione ducimus?
        </p>
      </Banner>
      <div style={{ border: "solid 1px #000" }}>
        <ServicesInclude />
        <PkgRate />
        <StandardOptimalPgs />
      </div>
    </>
  );
}
