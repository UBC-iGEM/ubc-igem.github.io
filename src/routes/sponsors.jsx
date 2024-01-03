import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import SponsorBackground from "../images/sponsor/sponsor_background.svg";
import { Padding } from "../constants";
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

const Background = styled.div`
  background-image: url(${SponsorBackground});
  background-repeat: no-repeat;
  min-height: fit-content;
  background-size: cover;
`;
const Img = styled.img`
  height: 10vw;
  padding: 2vw;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function Sponsors() {
  return (
    <div>
      <Header />
      <Background>
        <Padding style={{ paddingTop: "8vw", paddingBottom: "8vw" }}>
          <h1>We rely on your support to succeed</h1>
          <p>Thank you to our generous sponsors who make our science happen.</p>
        </Padding>
        <Padding style={{ paddingBottom: "8vw" }}>
          <Row>
            {[STEM, PRO, MBIM, BMB, MSL, ZOO, SBME, SUS, PAF, AMS].map(
              (svg) => (
                <Img src={svg} />
              )
            )}
          </Row>
        </Padding>
        <Padding style={{ paddingBottom: "10vw" }}>
          <h2>Want to sponsor us?</h2>
          <p>
            Check out our sponsorship package for more information.
            <i>coming soon.</i>
          </p>
        </Padding>
      </Background>
      <Footer />
    </div>
  );
}
