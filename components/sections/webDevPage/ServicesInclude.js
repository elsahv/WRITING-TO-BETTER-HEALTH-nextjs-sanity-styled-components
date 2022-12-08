import { Grid, LeftSide, RightSide } from "../../styles/Grid.styled";
import styled from "styled-components";

const Banner = styled.h2`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background-color: coral;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-bottom: solid 1px #000;
  border-top: solid 1px #000;
`;

const ServicesTitle = styled.h2`
  font-size: 25px;
`;

const ServicesContent = styled.div`
  padding: 0 20px 15px 40px;
`;

export default function ServicesInclude(title, contentBody) {
  return (
    <>
      {/* <div>
        {content.map((item, index) => (
          <div key={index} item={item}>
            <ServicesTitle>{item.title}</ServicesTitle>
            <p>{item.contentBody}</p>
          </div>
        ))}
      </div> */}
      <Banner id="servicesIncludes">Services Includes:</Banner>
      <Grid
        style={{
          background: "teal",
          opacity: "0.8",
          color: "#fff",
          textShadow: "1px 1px 1px #000",
          padding: "30px 0",
          textAlign: "center",
          borderBottom: "solid 1px #000",
        }}
      >
        <LeftSide>
          <div>
            <ServicesTitle>Custom-Designed Pages</ServicesTitle>
            <ServicesContent>
              <p>
                Including your home page, a menu with photos, an about page,
                directions to your location, and a contact page.
              </p>
              <p>
                Choose at least one optional page for your website: A blog,
                calendar for upcoming events or sales, or join our team page, or
                a menu for products other than ice cream.
              </p>
            </ServicesContent>
            <ServicesTitle>
              Unique Branding Specific To Your Ice Cream Store
            </ServicesTitle>
            <ServicesContent>
              Your website will be fully customized with your logo, color
              palette, pictures, and content. While we use templates to keep our
              rates competitive, your ice cream store website will be customized
              to look uniquely yours.
            </ServicesContent>
            <ServicesTitle>Monthly Analytics Reporting Setup</ServicesTitle>
            <ServicesContent>
              Each month you’ll receive a detailed analytics report via email.
              It will show how many people visited your website, and provide
              insights into where traffic comes from, and what parts of your
              site visitors are most interested in.
            </ServicesContent>
          </div>
        </LeftSide>
        <RightSide style={{ textAh4gn: "center" }}>
          <div>
            <ServicesTitle>Professionally-Written Content</ServicesTitle>
            <ServicesContent>
              We’ll take your bullet points and create messaging that makes
              people rush into your ice cream store. Our professional writing,
              photo curation, and expert Search Engine Optimization ensure
              customers will fall in love with your brand.
            </ServicesContent>
            <ServicesTitle>Demo Site During Design</ServicesTitle>
            <ServicesContent>
              If we’re rebuilding a website for you, your current site will stay
              live while we build your new design, so your guests will never see
              a frustrating “coming soon” page.
            </ServicesContent>
            <ServicesTitle>
              Explaining How To Access Our Service & Support
            </ServicesTitle>
            <ServicesContent>
              <p>
                Both your visitors and Google value websites that are properly
                optimized.
              </p>
              <p>
                Your monthly service package includes behind-the-scenes tech
                support, design time from our team, and the confidence that your
                website will be your 24/7 sales person.
              </p>
            </ServicesContent>
          </div>
        </RightSide>
      </Grid>
    </>
  );
}
