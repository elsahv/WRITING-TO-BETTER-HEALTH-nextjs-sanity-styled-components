import React from "react";
import ContactForm from "../components/ContactForm";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  @media only screen and (max-width: 531px) {
    height: 100%;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "left"
      "right";
  }
`;

const ContactFormWrapper = styled.div`
  grid-area: right;
  border-left: 1px solid #000;
`;
const Content = styled.div`
  grid-area: left;
  padding: 100px 55px 0;
  @media only screen and (max-width: 531px) {
    padding: 10px;
  }
`;
const contact = () => {
  return (
    <Wrapper>
      <Grid>
        <ContactFormWrapper id="sq">
          <ContactForm />
        </ContactFormWrapper>
        <Content id="sq">
          <h2>Contact </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            a enim at non, in aut sapiente culpa perferendis iusto unde officia.
            Explicabo magni fugit voluptatem, provident nostrum facere a
            consequuntur!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            a enim at non, in aut sapiente culpa perferendis iusto unde officia.
            Explicabo magni fugit voluptatem, provident nostrum facere a
            consequuntur!
          </p>
        </Content>
      </Grid>
    </Wrapper>
  );
};

export default contact;
