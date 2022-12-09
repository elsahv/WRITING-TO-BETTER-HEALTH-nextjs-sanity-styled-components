import React, { useState } from "react";
import { Data } from "./mthlyUpdatesData";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const Wrapper = styled.div`
  // background: green;
  width: 100%;
  height: 650px;
`;

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  // background: pink;
`;

const Container = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  // background: teal;
  color: #000;
  // border: solid 2px black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // width: 100%;
  text-align: center;
  cursor: pointer;
  width: 500px;

  h1 {
    padding: 25px;
    font-size: 20px;
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: aquamarine;
  color: #000;
  // text-shadow: 1px 1px 1px #000;
  width: 500px;

  // height: 100px;
  display: flex;
  padding: 25px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 2px solid black;

  p {
    font-size: 18px;
  }
`;

const Accordian = () => {
  const [clicked, setclicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setclicked(null);
    }
    setclicked(index);
  };
  return (
    <Wrapper>
      <IconContext.Provider value={{ color: "#000", size: "25px" }}>
        <AccordionSection>
          <Container>
            {Data.map((item, index) => {
              return (
                <>
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <h1>{item.service}</h1>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{item.description}</p>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
          </Container>
        </AccordionSection>
      </IconContext.Provider>
    </Wrapper>
  );
};

export default Accordian;
