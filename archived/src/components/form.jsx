import React from "react";
import styled from "styled-components";
import Button from "./button";
import { Col, Row } from "./constants";
import { useState } from "react";

const FieldRow = styled(Row)`
  justify-content: space-between;
`;

const FieldWidth = styled(Col)`
  @media only screen and (min-width: 600px) {
    width: 30vw;
  }
  padding: 1vw;
`;

const FieldWidthWide = styled(Col)`
  padding: 1vw;
`;

const Text = styled.p`
  margin: 0;
  padding: 0px;
  font-size: 25px;
  font-weight: 500;
`;

export default function Form() {
  const [nameValue, setName] = useState("");
  const [subjectValue, setSubject] = useState("");
  const [messageValue, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    console.log(event.target.value);
    setMessage(event.target.value);
  };

  return (
    <form>
      <Col>
        <FieldRow>
          <FieldWidth>
            <label for="fname">
              <Text>Name</Text>
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={nameValue}
              onChange={handleNameChange}
            />
          </FieldWidth>
          <FieldWidth>
            <label for="subject">
              <Text>Subject</Text>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subjectValue}
              onChange={handleEmailChange}
            />
          </FieldWidth>
        </FieldRow>
        <FieldWidthWide>
          <label for="message">
            <Text>Your message</Text>
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            style={{ height: "20vw", whiteSpace: "pre-line" }}
            cols="40"
            rows="5"
            value={messageValue}
            onChange={handleMessageChange}
          />
        </FieldWidthWide>
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            paddingTop: "1vw",
          }}
        >
          <Button
            text="Submit"
            link={
              "mailto:ubcigem@gmail.com" +
              "&subject=" +
              subjectValue +
              "&body=" +
              messageValue
            }
          />
        </div>
      </Col>
    </form>
  );
}
