import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import PastMolecule from "../images/past/past_molecule.svg";
import { Center, Padding, Projects, TopPadding } from "../constants";

const RightImage = styled.img`
  width: 20vw;
  float: right;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ProgImg = styled.img`
  width: 15vw;
`;

export default function Past() {
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
              <p>
                <i>{achievements}</i>
              </p>
            </Project>
          ))}
        </Row>
      </Padding>
      <Footer />
    </>
  );
}
