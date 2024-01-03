import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import { FAQs, Majors, Padding } from "../constants";
import JoinBackground from "../images/join/join_background.svg";

const Text = styled.p`
  margin: 0;
  padding: 0px;
`;

const Green = styled.div`
  background-color: #b1cbc0;
`;

const Background = styled.div`
  background-image: url(${JoinBackground});
  background-repeat: no-repeat;
  min-height: fit-content;
  background-size: cover;
`;

const LandingDiv = styled.div`
  padding-top: 8vw;
  padding-bottom: 15vw;
`;

const SmallPadding = styled.div`
  padding-top: 2vw;
  padding-bottom: 2vw;
`;

export default function Join() {
  return (
    <div>
      <Header />
      <Background>
        <Padding>
          <LandingDiv>
            <h1>Join the Team</h1>
            <Text>
              Want to meet like-minded students to design something amazing?
            </Text>
          </LandingDiv>
        </Padding>
        <Padding style={{ paddingBottom: "8vw" }}>
          <h2>Our applications are currently closed.</h2>
          <Text>
            Consider joining us for our next competition season. Come visit our
            website in the fall or follow us on Instagram for updates!
          </Text>
        </Padding>
        <Green>
          <Padding style={{ paddingTop: "8vw", paddingBottom: "6vw" }}>
            <h1>Is iGEM for you?</h1>
            {Majors.map((info) => (
              <SmallPadding>
                <h3>{info.major}</h3>
                <Text>{info.description}</Text>
              </SmallPadding>
            ))}
          </Padding>
        </Green>

        <Padding style={{ paddingTop: "8vw", paddingBottom: "50vw" }}>
          <h1>FAQ</h1>
          {FAQs.map((qa) => (
            <SmallPadding>
              <h3>{qa.q}</h3>
              <Text>{qa.a}</Text>
            </SmallPadding>
          ))}
        </Padding>
      </Background>
      <Footer />
    </div>
  );
}
