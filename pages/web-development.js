import StandardOptimalPgs from "../components/sections/webDevPage/StandardOptimalPgs";
import PkgRate from "../components/sections/webDevPage/PkgRate";
import ServicesInclude from "../components/sections/webDevPage/ServicesInclude";

export default function webDevelopment() {
  return (
    <>
      <ServicesInclude />
      <div style={{ border: "solid 1px #000" }}>
        <PkgRate />
        <StandardOptimalPgs />
      </div>
      {/* scroll to top button */}
    </>
  );
}
