import React from "react";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import {
  Background,
  Center,
  Members,
  Padding,
  Row,
  TopPadding,
} from "../components/constants";
import TeamBackgroundImage from "../images/team/team_background_short.webp";
import Button from "../components/button";
import "../components/index.css";

const TeamBackground = styled(Background)`
  @media only screen and (min-width: 600px) {
    background-image: url(${TeamBackgroundImage});
  }
`;

const TeamDiv = styled.div`
  @media only screen and (min-width: 600px) {
    width: 40vw;
  }
  padding-bottom: 10vw;
`;

const FlexRow = styled(Row)`
  flex-wrap: wrap;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 30px;
`;

const Text = styled.p`
  text-align: center;
  font-size: 20px;
`;

const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const FlipCard = styled.div`
  background-color: transparent;
  padding: 1vw;
  @media only screen and (min-width: 600px) {
    width: 12vw;
    height: 12vw;
  }
  &:hover ${Inner} {
    transform: rotateY(180deg);
  }
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  border-radius: 30px;
  background-color: #b1cbc0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Back = styled.div`
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background-color: #b1cbc0;
  border-radius: 30px;
  color: white;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Team = () => {
  return (
    <>
      <Header />
      <TeamBackground>
        <Padding>
          <div
            style={{
              display: "flex",
              flexDirection: "col",
              justifyContent: "right",
              paddingTop: TopPadding,
            }}
          >
            <TeamDiv>
              <h1>Meet our Team</h1>
              <p>
                UBC iGEM is made up of passionate undergraduate scientists from
                different departments and faculties
              </p>
            </TeamDiv>
          </div>

          <div>
            {Members.map((members) => (
              <>
                <h2>{members.header}</h2>
                <FlexRow style={{ paddingBottom: "5vw" }}>
                  {members.people.map(({ name, position, photo, major }) => (
                    <Center>
                      <FlipCard>
                        <Inner>
                          <Front>
                            {photo === "false" ? (
                              <div>
                                <Text>{name}</Text>
                                <div style={{ paddingTop: "15px" }}>
                                  <Text>{position}</Text>
                                  <Text>
                                    <i>{major}</i>
                                  </Text>
                                </div>
                              </div>
                            ) : (
                              <ProfileImg
                                src={
                                  "/headshots/" +
                                  (photo
                                    ? photo
                                    : name.split(" ")[0].toLowerCase() + ".jpg")
                                }
                              />
                            )}
                          </Front>
                          <Back>
                            <div>
                              <Text>{name}</Text>
                              <div style={{ paddingTop: "15px" }}>
                                <Text>{position}</Text>
                                <Text>
                                  <i>{major}</i>
                                </Text>
                              </div>
                            </div>
                          </Back>
                        </Inner>
                      </FlipCard>
                    </Center>
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
                paddingTop: "20vw",
                paddingBottom: "10vw",
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
      </TeamBackground>
      <Footer />
    </>
  );
};

export default Team;

export const Head = () => (
  <>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#b1cbc0" />
    <meta
      name="description"
      content="building a better future through synthetic biology"
    />

    <title>Meet our Team</title>
  </>
);
