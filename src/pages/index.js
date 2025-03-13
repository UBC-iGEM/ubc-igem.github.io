import React from "react";
import styled from "styled-components";
import Button from "../components/button";
import Footer from "../components/footer";
import Header from "../components/header";
import { Background, Padding, TopPadding } from "../components/constants";
import LandingBackgroundImage from "../images/landing/landing_background.webp";
import LandingPhoto from "../images/landing/landing_photo.svg";
import "../components/index.css";
import Announcement from 'react-announcement'
import NUCLOUD from "../images/past/2024.svg";

const LandingBackground = styled(Background)`
  background-image: url(${LandingBackgroundImage});
`;

const LandingDiv = styled.div`
  padding-top: ${TopPadding};
  @media only screen and (min-width: 600px) {
    width: 60vw;
  }
`;

const ImgRight = styled.img`
  width: 50vw;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const JustifyRight = styled.div`
  display: flex;
  justify-content: right;
  padding-bottom: 20vh;
`;

const PadBottom = styled.div`
  padding-bottom: 15vh;
`;

const Root = () => {
  return (
    <>
    <Announcement
        title="Jamboree Results are in!"
        subtitle="UBC iGEM 2024 is officially the Best Undergrad Team in North America this year! 🌎🥳 "
        link="https://2024.igem.wiki/ubc-vancouver/awards/"
        imageSource={NUCLOUD}
        secondsBeforeBannerShows={0}
        closeIconSize={30}
        animateInDuration={500}
        animateOutDuration={500}
      />
      <Header />
      <LandingBackground>
        <Padding>
          <LandingDiv>
            <h1>UBC iGEM</h1>
            <h2>Building a better future through synthetic biology</h2>
          </LandingDiv>
        </Padding>

        <JustifyRight>
          <ImgRight src={LandingPhoto} />
        </JustifyRight>

        <Padding>
          <PadBottom>
            <h2>International Genetically Engineered Machine (iGEM)</h2>
            <p>
              is an MIT-based non profit organization that hosts the annual iGEM
              synthetic biology competition. They are founded with the goal of
              advancing the field of synthetic biology through education,
              competition, and fostering a collaborative community. With over
              5,000 annual participants, iGEM has promoted the application of
              genetic cellular engineering to various scientific fields.
            </p>
            <Button text={"Learn More"} link={"https://igem.org/"} />
          </PadBottom>

          <PadBottom>
            <div>
              <h2>Our Team</h2>
              <p>
                the UBC iGEM team is an undergraduate student design team that
                has competed in this competition since 2009. Our current team
                consists of highly motivated undergraduate students along with
                graduate and faculty advisors that span various life sciences
                and engineering fields.
              </p>
              <Button text={"Learn More"} link={"/team"} />
            </div>
          </PadBottom>

          <div>
            <h2>Simply Synbio</h2>
            <p>Check out our new blog, Simply Synbio!</p>
            <Button
              text={"Learn More"}
              link={"https://ubcigem.com/simplysynbio/"}
            />
          </div>
        </Padding>
      </LandingBackground>
      <Footer />
    </>
  );
};

export default Root;

export const Head = () => (
  <>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#b1cbc0" />
    <meta
      name="description"
      content="Building a better future through synthetic biology"
    />

    <title>UBC iGEM</title>
  </>
);
