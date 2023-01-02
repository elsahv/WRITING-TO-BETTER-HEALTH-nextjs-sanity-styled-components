import React, { useState } from "react";
import Image from "next/image";
import { sanityClient, urlFor } from "../client";
import { Grid, LeftSide, RightSide } from "../components/styles/Grid.styled";
import img1 from "../public/images/sketch2.jpg";
import { SmImgWrapper } from "../components/styles/images/SectionImages.styled";
import { ContactBtn } from "../components/styles/buttons/ContactBtn.styled";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import styled from "styled-components";

const BannerTitle = styled.div`
  // background: pink;
  padding: 20px;
  border-bottom: solid 1px #000;
  margin-bottom: 20px;
`;

const ContactBtnsWrapper = styled.div`
  // background: maroon;
  width: 260px;
  display: flex;
  justify-content: space-between;
  margin: 10px 20px;
`;

const Wrapper = styled.div`
  // background: green;
  width: 100%;
  height: 850px;
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
  left: 5%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: teal;
  color: #fff;
  border: solid 2px black;
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
  border: 2px solid black;

  p {
    font-size: 18px;
  }
`;

export default function webDev({ services }) {
  const [clicked, setclicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setclicked(null);
    }
    setclicked(index);
  };
  return (
    <>
      <BannerTitle>
        <h2>Web Development</h2>
        <span>
          Lorem borum re que quos? In, vitae. Molestiae ipsam vitae voluptate
          qui quasi commodi, magnam veritatis.
        </span>
        <span>Services Include</span>
        <ContactBtnsWrapper>
          <ContactBtn>See packages</ContactBtn>
          <ContactBtn>Contact</ContactBtn>
        </ContactBtnsWrapper>
      </BannerTitle>

      <Grid>
        <LeftSide>
          <Wrapper>
            <IconContext.Provider value={{ color: "#00ffb9", size: "25px" }}>
              <AccordionSection>
                <Container>
                  {services &&
                    services.map((service, index) => {
                      return (
                        <>
                          <span key={index}>
                            <Wrap onClick={() => toggle(index)} key={index}>
                              <h1>{service.serviceTitle}</h1>
                              <span>
                                {clicked === index ? <FiMinus /> : <FiPlus />}{" "}
                              </span>
                            </Wrap>
                            {clicked === index ? (
                              <Dropdown>
                                <p>{service.serviceDescription}</p>
                              </Dropdown>
                            ) : null}
                          </span>
                        </>
                      );
                    })}
                </Container>
              </AccordionSection>
            </IconContext.Provider>
          </Wrapper>
        </LeftSide>
        <RightSide>
          <SmImgWrapper>
            <Image
              src={img1}
              alt="about-me"
              layout="responsive"
              className="img"
              // height="100px"
              // width="200px"
            />
          </SmImgWrapper>
        </RightSide>
      </Grid>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type in ["services", "pkgRates"]] ';
  const services = await sanityClient.fetch(query);
  if (!services.length) {
    return {
      props: {
        services: [],
      },
    };
  } else {
    return {
      props: {
        services,
      },
    };
  }
};
