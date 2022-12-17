import React, { useState } from "react";
import { Data } from "./data.js";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
  Wrapper,
  AccordionSection,
  Container,
  Wrap,
  Dropdown,
} from "./accordian.styled";

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
      <IconContext.Provider value={{ color: "#00ffb9", size: "25px" }}>
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
