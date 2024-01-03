import styled from "styled-components";
import Button from "../components/button";
import Footer from "../components/footer";
import Header from "../components/header";
import { Padding } from "../constants";
import LandingBackground from "../images/landing/landing_background.svg";
import LandingPhoto from "../images/landing/landing_photo.svg";

const Background = styled.div`
  background-position-y: 40%;
  background-image: url(${LandingBackground});
  background-repeat: no-repeat;
  min-height: fit-content;
  background-size: contain;
`;

const LandingDiv = styled.div`
  padding-top: 20vh;
`;

const ImgRight = styled.img`
  width: 50vw;
`;

const JustifyRight = styled.div`
  display: flex;
  justify-content: right;
  padding-bottom: 20vh;
`;

const PadBottom = styled.div`
  padding-bottom: 15vh;
`;

export default function Root() {
  return (
    <Background>
      <Header />
      <Padding>
        <LandingDiv>
          <h1>UBC iGEM</h1>
          <h2>building a better future through synthetic biology</h2>
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

        <div>
          <h2>Our Team</h2>
          <p>
            the UBC iGEM team is an undergraduate student design team that has
            competed in this competition since 2009. Our current team consists
            of highly motivated undergraduate students along with graduate and
            faculty advisors that span various life sciences and engineering
            fields.
          </p>
          <Button text={"Learn More"} link={"/team"} />
        </div>
      </Padding>
      <Footer />
    </Background>
  );
}
