import React from "react";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import SponsorBackgroundImage from "../images/sponsor/sponsor_background.webp";
import {
  Background,
  Center,
  Padding,
  Row,
  TopPadding,
} from "../components/constants";
import AMS from "../images/sponsor/ams.png";
import BMB from "../images/sponsor/bmb.png";
import MBIM from "../images/sponsor/mbim.png";
import MSL from "../images/sponsor/msl.png";
import PAF from "../images/sponsor/paf.svg";
import PRO from "../images/sponsor/promega.png";
import SBME from "../images/sponsor/sbme.png";
import STEM from "../images/sponsor/stemcell.png";
import SUS from "../images/sponsor/sus.png";
import ZOO from "../images/sponsor/zoology.png";
import "../components/index.css";

const SponsorBackground = styled(Background)`
  background-image: url(${SponsorBackgroundImage});
`;

const Img = styled.img`
  height: 10vw;
  padding: 2vw;
  @media only screen and (max-width: 600px) {
    width: 70vw;
    height: auto;
  }
`;

const FlexRow = styled(Row)`
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Sponsors = () => {
  return (
    <div>
      <Header />
      <SponsorBackground>
        <Padding style={{ paddingTop: TopPadding, paddingBottom: "8vw" }}>
          <h1>We rely on your support to succeed</h1>
          <p>Thank you to our generous sponsors who make our science happen.</p>
        </Padding>
        <Padding style={{ paddingBottom: "8vw" }}>
          <FlexRow>
            {[STEM, PRO, MBIM, BMB, MSL, ZOO, SBME, SUS, PAF, AMS].map(
              (svg) => (
                <Center>
                  <Img src={svg} />
                </Center>
              )
            )}
          </FlexRow>
        </Padding>
        <Padding style={{ paddingBottom: "10vw" }}>
          <h2>Want to sponsor us?</h2>
          <p>
            Check out our sponsorship package for more information.
            <i> Coming soon.</i>
          </p>
        </Padding>
      </SponsorBackground>
      <Footer />
    </div>
  );
};

export default Sponsors;

export const Head = () => (
  <>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#b1cbc0" />
    <meta
      name="description"
      content="building a better future through synthetic biology"
    />

    <title>Sponsor Us.</title>
  </>
);
