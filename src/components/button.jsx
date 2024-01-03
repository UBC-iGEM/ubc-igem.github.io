import styled from "styled-components";

const ButtonStyle = styled.div`
  border-radius: 45px;
  background-color: #b1cbc0;
  max-width: fit-content;
  padding: 3px 15px;
`;

const Link = styled.p`
  font-weight: 600;
  margin: 0;
  padding: 5px;
`;

export default function Button({ text, link }) {
  return (
    <ButtonStyle>
      <a href={link} target="_blank">
        <Link>{text}</Link>
      </a>
    </ButtonStyle>
  );
}
