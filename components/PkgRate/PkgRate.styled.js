import styled from "styled-components";

export const Wrapper = styled.div`
  // background: coral;
  padding: 30px 20px;
  border-top: solid 1px #000;
`;

export const Title = styled.h2`
  // padding-left: 50px;
  padding: 20px 0;
  text-align: center;
  margin-bottom: 5px;
  text-decoration: underline;
  font-size: 34px;
  // color: #fff;
  // text-shadow: 1px 1px 1px #000;
  // background: teal;
`;

export const Sq = styled.div`
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
    padding: 5px 0;
  }
`;
