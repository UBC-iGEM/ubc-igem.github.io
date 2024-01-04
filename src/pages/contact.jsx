import React  from 'react';
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import ContactRight from "../images/contact/contact_right.svg";
import Email from "../images/social-media/email.svg";
import IG from "../images/social-media/instagram.svg";
import Linkedin from "../images/social-media/linkedin.svg";
import { Col, Padding, Row, TopPadding } from "../components/constants";
import Form from "../components/form";
import "../components/index.css";

const RightImage = styled.img`
  width: 40vw;
  float: right;
`;

const PaddedCol = styled(Col)`
  padding-bottom: 20vw;
`;

const Icon = styled.img`
  width: 3vw;
  padding-right: 20px;
  @media only screen and (max-width: 600px) {
    width: 15vw;
    height: auto;
  }
`;

const Text = styled.p`
  text-align: center;
`;

const PaddedRow = styled(Row)`
  padding-top: 2vw;
  @media only screen and (max-width: 600px) {
    flex-direction: row;
  }
`;

const Contact = () => {
  return (
    <>
      <Header />
      <Padding>
        <div style={{ paddingTop: TopPadding, paddingBottom: "5vw" }}>
          <h1>Contact us</h1>
          <p>Interested in collaborating with or sponsoring us?</p>
        </div>
      </Padding>

      <RightImage src={ContactRight} />
      <Padding>
        <PaddedCol>
          <h2>You can find us here</h2>
          {[
            {
              svg: Email,
              href: "mailto:ubcigem@gmail.com",
              name: "ubcigem@gmail.com",
            },
            {
              svg: IG,
              href: "https://www.instagram.com/ubcigem",
              name: "@ubcigem",
            },
            {
              svg: Linkedin,
              href: "https://www.linkedin.com/company/ubc-igem",
              name: "UBC iGEM",
            },
          ].map((sm) => (
            <PaddedRow>
              <a href={sm.href}>
                <Icon src={sm.svg} />
              </a>
              <Text>{sm.name}</Text>
            </PaddedRow>
          ))}
        </PaddedCol>
      </Padding>

      <Padding>
        <h2>... or shoot us a message.</h2>
        <Form />
      </Padding>
      <Footer />
    </>
  );
};

export default Contact;

export const Head = () => (
  <>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/android-chrome-512x512.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#b1cbc0" />
    <meta
      name="description"
      content="building a better future through synthetic biology"
    />
    <link
      rel="apple-touch-icon"
      href="%PUBLIC_URL%/android-chrome-192x192.png"
    />

    <title>Contact us</title>
  </>
);
