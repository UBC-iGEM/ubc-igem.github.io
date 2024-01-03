import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import { Center, Members, Padding, TopPadding } from "../constants";
import TeamBackground from "../images/team/team_background.png";
import Button from "../components/button";

const Background = styled.div`
  background-image: url(${TeamBackground});
  background-repeat: no-repeat;
  min-height: fit-content;
  background-size: cover;
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
`;

const Text = styled.p`
  text-align: center;
  font-size: 20px;
`;

export default function Team() {
  return (
    <>
      <Header />
      <Background>
        <Padding>
          <div
            style={{
              display: "flex",
              flexDirection: "col",
              justifyContent: "right",
              paddingTop: TopPadding,
            }}
          >
            <div style={{ width: "40vw", paddingBottom: "10vw" }}>
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
          <Center
            style={{
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "10vw",
                paddingBottom: "80vw",
              }}
            >
              <h2>Want to join us?</h2>
              <Center
                style={{
                  textAlign: "center",
                }}
              >
                <Button text="Learn More" link="/join" />
              </Center>
            </div>
          </Center>
        </Padding>
      </Background>
      <Footer />
    </>
  );
}
