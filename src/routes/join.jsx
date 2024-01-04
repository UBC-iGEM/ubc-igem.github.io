import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import { Background, FAQs, Majors, Padding, TopPadding } from "../constants";
import JoinBackgroundImage from "../images/join/join_background.png";

const Green = styled.div`
  background-color: #b1cbc0;
`;

const JoinBackground = styled(Background)`
  background-image: url(${JoinBackgroundImage});
`;

const LandingDiv = styled.div`
  padding-top: ${TopPadding};
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
      <JoinBackground>
        <Padding>
          <LandingDiv>
            <h1>Join the Team</h1>
            <p>
              Want to meet like-minded students to design something amazing?
            </p>
          </LandingDiv>
        </Padding>
        <Padding style={{ paddingBottom: "8vw" }}>
          <h2>Our applications are currently closed.</h2>
          <p>
            Consider joining us for our next competition season. Come visit our
            website in the fall or follow us on Instagram for updates!
          </p>
        </Padding>
        <Green>
          <Padding style={{ paddingTop: "8vw", paddingBottom: "6vw" }}>
            <h1>Is iGEM for you?</h1>
            {Majors.map((info) => (
              <SmallPadding>
                <h3>{info.major}</h3>
                <p>{info.description}</p>
              </SmallPadding>
            ))}
          </Padding>
        </Green>

        <Padding style={{ paddingTop: "8vw", paddingBottom: "50vw" }}>
          <h1>FAQ</h1>
          {FAQs.map((qa) => (
            <SmallPadding>
              <h3>{qa.q}</h3>
              <p>{qa.a}</p>
            </SmallPadding>
          ))}
        </Padding>
      </JoinBackground>
      <Footer />
    </div>
  );
}
