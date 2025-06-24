import React from "react";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import PastMolecule from "../images/past/past_molecule.svg";
import { Center, Padding, Projects, TopPadding } from "../components/constants";
import "../components/index.css";

const RightImage = styled.img`
  width: 20vw;
  float: right;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2vw;
  @media only screen and (min-width: 600px) {
    width: 25vw;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ProgImg = styled.img`
  width: 15vw;
  @media only screen and (max-width: 600px) {
    width: 70vw;
  }
`;

const Past = () => {
  return (
    <>
      <Header />
      <RightImage src={PastMolecule} />
      <Padding style={{ paddingTop: TopPadding, paddingBottom: "8vw" }}>
        <h1>Explore our past projects</h1>
        <p>
          Sine 2009, when our team was formed, UBC iGEM has been working hard to
          push the boundaries of synthetic biology
        </p>
      </Padding>
      <Padding>
        <Row>
          {Projects.map(({ svg, title, description, achievements }) => (
            <Project>
              <Center>
                <ProgImg src={svg} />
              </Center>
              <h3>{title}</h3>
              <p>{description}</p>
              <p style={{ paddingTop: "20px" }}>
                <i>{achievements}</i>
              </p>
            </Project>
          ))}
        </Row>
      </Padding>
      <Footer />
    </>
  );
};

export default Past;

export const Head = () => (
  <>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#b1cbc0" />
    <meta
      name="description"
      content="building a better future through synthetic biology"
    />

    <title>Past Projects</title>
  </>
);
