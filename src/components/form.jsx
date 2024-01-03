import styled from "styled-components";
import Button from "./button";

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.p`
  margin: 0;
  padding: 0px;
  font-size: 25px;
  font-weight: 500;
`;

export default function Form() {
  return (
    <form>
      <Col>
        <Row>
          <Col style={{ width: "30vw", padding: "1vw" }}>
            <label for="fname">
              <Text>Name</Text>
            </label>
            <input type="text" id="fname" name="fname" />
          </Col>
          <Col style={{ width: "30vw", padding: "1vw" }}>
            <label for="email">
              <Text>Your email</Text>
            </label>
            <input type="text" id="email" name="email" />
          </Col>
        </Row>
        <Col style={{ height: "20vw", padding: "1vw" }}>
          <label for="message">
            <Text>Your message</Text>
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            style={{ height: "20vw" }}
            cols="40"
            rows="5"
          />
        </Col>
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            paddingTop: "1vw",
          }}
        >
          <Button text="Submit" link="TODO" />
        </div>
      </Col>
    </form>
  );
}
