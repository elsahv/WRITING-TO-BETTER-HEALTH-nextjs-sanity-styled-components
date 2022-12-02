import styled from "styled-components";

const PkgRateWrapper = styled.div`
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  padding: 100px 0;
  background: teal;
  margin: 20px 0;
  height: 400px;
`;
export default function PkgRate() {
  return (
    <>
      <PkgRateWrapper>
        <h2>PKG RATE</h2>
      </PkgRateWrapper>
    </>
  );
}
