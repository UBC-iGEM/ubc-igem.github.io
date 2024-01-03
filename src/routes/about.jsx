import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import AboutBackground from "../images/about/about_background.svg";
import LeftAbout from "../images/about/left_about.svg";
import RightAbout from "../images/about/about_right.svg";
import SimplySynbio from "../images/about/simply_synbio.svg";
import Sustain from "../images/about/sustainability_in_synbio.svg";
import Blank from "../images/about/blank.svg";
import Pilot from "../images/past/2023.svg";
import { Padding } from "../constants";
import Button from "../components/button";

const Background = styled.div`
  background-image: url(${AboutBackground});
  background-repeat: no-repeat;
  min-height: fit-content;
  background-size: contain;
  background-position-y: 16%;
`;

const Text = styled.p`
  margin: 0;
  padding: 0px;
`;

const RowSpaced = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftImage = styled.img`
  width: 35vw;
  padding: 0 5vw;
`;

const RightImage = styled.img`
  width: 40vw;
  float: right;
`;

const Initiative = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20vw;
  text-align: center;
`;

const InitImg = styled.img`
  width: 12vw;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function About() {
  const initiatives = [
    { name: "2023 project", image: Pilot },
    { name: "simply synbio video series", image: SimplySynbio },
    { name: "sustainability in synbio podcast", image: Sustain },
    { name: "Community Outreach", image: Blank },
    { name: "Past Projects", image: Blank },
  ];

  return (
    <Background>
      <Header />

      <Padding>
        <div
          style={{ width: "38vw", paddingTop: "8vw", paddingBottom: "22vw" }}
        >
          <h1>iGEM at UBC</h1>
          <Text>
            we are an eager team of undergraduates, supported by multiple
            professors and graduate students who act as mentors.
          </Text>
        </div>
      </Padding>

      <LeftImage src={LeftAbout} style={{ float: "left" }} />

      <Padding>
        <RowSpaced style={{ paddingBottom: "25vw" }}>
          <Text>
            UBC iGEM strives to create a space for budding scientists to expand
            their skills in research, science communication, and teamwork. We
            work towards not only the goal of competing in the iGEM Jamboree,
            but also to promote interdisciplinary learning and introduce our
            community to synthetic biology and the impacts it will have on our
            near future.
          </Text>
        </RowSpaced>
      </Padding>

      <RightImage src={RightAbout} />

      <Padding>
        <div style={{ paddingBottom: "35vw" }}>
          <h2>The iGEM Jamboree</h2>
          <p>
            is an international synthetic biology competition where student
            teams build their own genetic circuits and express them in
            biological systems. At this competition, students present their work
            and get judged by a scientific jury to win the Grand Prize.
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
        <Button text="Learn More" link="/past" />
      </Padding>

      <Footer />
    </Background>
  );
}
