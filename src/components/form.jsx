import styled from "styled-components";
import Button from "./button";
import { Col, Row } from "../constants";

const FieldRow = styled(Row)`
  justify-content: space-between;
`;

const FieldWidth = styled(Col)`
  @media only screen and (min-width: 600px) {
    width: 30vw;
  }
  padding: 1vw;
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
        <FieldRow>
          <FieldWidth>
            <label for="fname">
              <Text>Name</Text>
            </label>
            <input type="text" id="fname" name="fname" />
          </FieldWidth>
          <FieldWidth>
            <label for="email">
              <Text>Your email</Text>
            </label>
            <input type="text" id="email" name="email" />
          </FieldWidth>
        </FieldRow>
        <FieldWidth>
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
        </FieldWidth>
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
