import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import { Members, Padding } from "../constants";
import TeamBackground from "../images/team/team_background.png";
import Button from "../components/button";

const Background = styled.div`
  background-image: url(${TeamBackground});
  background-repeat: no-repeat;
  min-height: fit-content;
  background-size: cover;
  background-position-y: -35%;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 12vw;
  height: 12vw;
  margin: 1vw;
  padding: 1vw;
  border-radius: 60px;
  background-color: #b1cbc0;
  justify-content: center;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-around; */
`;

const Text = styled.p`
  margin: 0;
  padding: 0px;
  font-size: 20px;
  text-align: center;
`;

export default function Team() {
  return (
    <Background>
      <Header />
      <Padding>
        <div
          style={{
            display: "flex",
            flexDirection: "col",
            justifyContent: "right",
            paddingTop: "16vw",
          }}
        >
          <div style={{ width: "45vw", paddingBottom: "10vw" }}>
            <h1>Meet our Team</h1>
            <p>
              UBC iGEM is made up of passionate undergraduate scientists from
              different departments and faculties
            </p>
          </div>
        </div>

        <div style={{ paddingBottom: "10vw" }}>
          {Members.map((members) => (
            <>
              <h2>{members.header}</h2>
              <FlexRow style={{ paddingBottom: "5vw" }}>
                {members.people.map(({ name, position, major }) => (
                  <Col>
                    <Text>{name}</Text>
                    <div style={{ paddingTop: "15px" }}>
                      <Text>{position}</Text>
                      <Text>
                        <i>{major}</i>
                      </Text>
                    </div>
                  </Col>
                ))}
              </FlexRow>
            </>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "10vw",
              paddingBottom: "10vw",
            }}
          >
            <h2>Want to join us?</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Button text="Learn More" link="/join" />
            </div>
          </div>
        </div>
      </Padding>
      <Footer />
    </Background>
  );
}
