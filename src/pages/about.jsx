import React  from 'react';
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import AboutBackgroundImage from "../images/about/about_background.webp";
import LeftAbout from "../images/about/left_about.svg";
import RightAbout from "../images/about/about_right.svg";
import SimplySynbio from "../images/about/simply_synbio.svg";
import Sustain from "../images/about/sustainability_in_synbio.svg";
import Blank from "../images/about/blank.svg";
import "../components/index.css";
import Pilot from "../images/past/2023.svg";
import {
  Background,
  Center,
  Col,
  Padding,
  Row,
  TopPadding,
} from "../components/constants";
import Button from "../components/button";

const AboutBackground = styled(Background)`
  background-image: url(${AboutBackgroundImage});
`;

const AboutDiv = styled.div`
  padding-top: ${TopPadding};
  padding-bottom: 10vw;
  @media only screen and (min-width: 600px) {
    width: 38vw;
    padding-bottom: 22vw;
  }
`;

const LeftImage = styled.img`
  width: 30vw;
  padding: 0 5vw;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const LeftImageMobile = styled.img`
  width: 80vw;
  @media only screen and (min-width: 600px) {
    display: none;
  }
  padding-bottom: 5vw;
`;

const RightImage = styled.img`
  width: 40vw;
  float: right;
  @media only screen and (max-width: 600px) {
    width: 70vw;
  }
`;

const Initiative = styled(Col)`
  justify-content: center;
  text-align: center;
  padding: 10px;
  @media only screen and (min-width: 600px) {
    width: 20vw;
  }
`;

const InitImg = styled.img`
  width: 12vw;
  @media only screen and (max-width: 600px) {
    width: 70vw;
  }
`;

const FlexRow = styled(Row)`
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ButtonDiv = styled.div`
  @media only screen and (min-width: 600px) {
    display: flex;
    justify-content: right;
    padding-top: 1vw;
    padding-right: 11vw;
  }
`;

const About = () => {
  const initiatives = [
    { name: "2023 project", image: Pilot },
    { name: "simply synbio video series", image: SimplySynbio },
    { name: "sustainability in synbio podcast", image: Sustain },
    { name: "Community Outreach", image: Blank },
    { name: "Past Projects", image: Blank },
  ];

  return (
    <>
      <Header />
      <AboutBackground>
        <Padding>
          <AboutDiv>
            <h1>iGEM at UBC</h1>
            <p>
              we are an eager team of undergraduates, supported by multiple
              professors and graduate students who act as mentors.
            </p>
          </AboutDiv>
        </Padding>

        <LeftImage src={LeftAbout} style={{ float: "left" }} />

        <Padding>
          <Row style={{ paddingBottom: "15vw" }}>
            <LeftImageMobile src={LeftAbout} />
            <div>
              <h2 style={{ textAlign: "right" }}>What we do</h2>
              <p>
                UBC iGEM strives to create a space for budding scientists to
                expand their skills in research, science communication, and
                teamwork. We work towards not only the goal of competing in the
                iGEM Jamboree, but also to promote interdisciplinary learning
                and introduce our community to synthetic biology and the impacts
                it will have on our near future.
              </p>
            </div>
          </Row>
        </Padding>

        <RightImage src={RightAbout} />

        <Padding>
          <div style={{ paddingBottom: "35vw" }}>
            <h2>The iGEM Jamboree</h2>
            <p>
              is an international synthetic biology competition where student
              teams build their own genetic circuits and express them in
              biological systems. At this competition, students present their
              work and get judged by a scientific jury to win the Grand Prize.
            </p>
          </div>
        </Padding>

        <Padding>
          <h2 style={{ textAlign: "center", paddingBottom: "1vw" }}>
            Our Initiatives
          </h2>
          <FlexRow>
            {initiatives.map((i) => (
              <Initiative>
                <div>
                  <InitImg src={i.image} />
                </div>
                <p>{i.name}</p>
              </Initiative>
            ))}
          </FlexRow>

          <ButtonDiv>
            <Center>
              <Button text="Learn More" link="/past" />
            </Center>
          </ButtonDiv>
        </Padding>
      </AboutBackground>
      <Footer />
    </>
  );
};

export default About;

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

    <title>About</title>
  </>
);
