import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import ContactRight from "../images/contact/contact_right.svg";
import Email from "../images/social-media/email.svg";
import IG from "../images/social-media/instagram.svg";
import Linkedin from "../images/social-media/linkedin.svg";
import { Padding } from "../constants";
import Form from "../components/form";

const RightImage = styled.img`
  width: 40vw;
  float: right;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20vw;
`;

const Icon = styled.img`
  width: 3vw;
  padding-right: 20px;
`;

const Text = styled.p`
  margin: 0;
  padding: 0px;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  padding-top: 2vw;
  flex-direction: row;
`;
export default function Contact() {
  return (
    <>
      <Header />

      <Padding>
        <div style={{ paddingTop: "10vw", paddingBottom: "5vw" }}>
          <h1>Contact us</h1>
          <p>Interested in collaborating with or sponsoring us?</p>
        </div>
      </Padding>

      <RightImage src={ContactRight} />
      <Padding>
        <Col>
          <h2>You can find us here</h2>
          {[
            {
              svg: Email,
              href: "mailto:ubcigem@gmail.com",
              name: "ubcigem@gmail.com",
            },
            {
              svg: IG,
              href: "https://www.instagram.com/ubcigem",
              name: "@ubcigem",
            },
            {
              svg: Linkedin,
              href: "https://www.linkedin.com/company/ubc-igem",
              name: "UBC iGEM",
            },
          ].map((sm) => (
            <Row>
              <a href={sm.href}>
                <Icon src={sm.svg} />
              </a>
              <Text>{sm.name}</Text>
            </Row>
          ))}
        </Col>
      </Padding>

      <Padding>
        <h2>... or shoot us a message.</h2>
        <Form />
      </Padding>
      <Footer />
    </>
  );
}
