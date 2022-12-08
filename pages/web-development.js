import StandardOptimalPgs from "../components/sections/webDevPage/StandardOptimalPgs";
import PkgRate from "../components/sections/webDevPage/PkgRate";
import ServicesInclude from "../components/sections/webDevPage/ServicesInclude";
import MthlyUpdatesInclude from "../components/sections/webDevPage/MthlyUpdatesInclude";
import WebDevHero from "../components/sections/webDevPage/WebDevHero";

export default function webDevelopment() {
  return (
    <>
      <WebDevHero />
      {/* <ServicesInclude /> */}
      <MthlyUpdatesInclude />
      <PkgRate />
      <StandardOptimalPgs />
      scroll to top button
    </>
  );
}
