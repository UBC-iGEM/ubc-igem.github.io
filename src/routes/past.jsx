import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import PastMolecule from "../images/past/past_molecule.svg";
import { Center, Padding, Projects } from "../constants";

const RightImage = styled.img`
  width: 20vw;
  float: right;
`;

const Text = styled.p`
  font-size: 20px;
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
      <Padding>
        <h1>Explore our past projects</h1>
        <Text>
          Sine 2009, when our team was formed, UBC iGEM has been working hard to
          push the boundaries of synthetic biology
        </Text>
      </Padding>
      <Padding>
        <Row>
          {Projects.map(({ svg, title, description, achievements }) => (
            <Project>
              <Center>
                <ProgImg src={svg} />
              </Center>
              <h3>{title}</h3>
              <Text>{description}</Text>
              <Text>
                <i>{achievements}</i>
              </Text>
            </Project>
          ))}
        </Row>
      </Padding>
      <Footer />
    </>
  );
}
