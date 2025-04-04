import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const ButtonStyle = styled.div`
  border-radius: 45px;
  background-color: #b1cbc0;
  max-width: fit-content;
  padding: 3px 15px;
  margin-top: 3vw;
`;

const LinkStyle = styled.p`
  font-weight: 600;
  margin: 0;
  padding: 5px;
`;

export default function Button({ text, link }) {
  return (
    <ButtonStyle>
      <Link to={link}>
        <LinkStyle>{text}</LinkStyle>
      </Link>
    </ButtonStyle>
  );
}
