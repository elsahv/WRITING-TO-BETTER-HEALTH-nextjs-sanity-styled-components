import StandardOptimalPgs from "../components/StandardOptimalPgs";
import PkgRate from "../components/PkgRate";
import ServicesInclude from "../components/ServicesInclude";

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
