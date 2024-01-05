import React from "react";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import {
  Background,
  Center,
  Col,
  Members,
  Padding,
  Row,
  TopPadding,
} from "../components/constants";
import TeamBackgroundImage from "../images/team/team_background.png";
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

const MemberBlock = styled(Col)`
  width: 55vw;
  height: 55vw;
  margin: 1vw;
  padding: 1vw;
  border-radius: 60px;
  background-color: #b1cbc0;
  justify-content: center;
  @media only screen and (min-width: 600px) {
    width: 12vw;
    height: 12vw;
  }
`;

const FlexRow = styled(Row)`
  flex-wrap: wrap;
`;

const Text = styled.p`
  text-align: center;
  font-size: 20px;
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

          <div style={{ paddingBottom: "20vw" }}>
            {Members.map((members) => (
              <>
                <h2>{members.header}</h2>
                <FlexRow style={{ paddingBottom: "5vw" }}>
                  {members.people.map(({ name, position, major }) => (
                    <Center>
                      <MemberBlock>
                        <Text>{name}</Text>
                        <div style={{ paddingTop: "15px" }}>
                          <Text>{position}</Text>
                          <Text>
                            <i>{major}</i>
                          </Text>
                        </div>
                      </MemberBlock>
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
