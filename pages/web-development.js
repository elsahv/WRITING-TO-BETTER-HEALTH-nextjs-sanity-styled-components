import StandardOptimalPgs from "../components/sections/webDevPage/StandardOptimalPgs";
import PkgRate from "../components/sections/webDevPage/PkgRate";
import WebDevHero from "../components/sections/webDevPage/WebDevHero";

export default function webDevelopment() {
  return (
    <>
      <WebDevHero />
      <div style={{ border: "solid 1px #000" }}>
        <PkgRate />
        <StandardOptimalPgs />
      </div>
      scroll to top button
    </>
  );
}
