import { NavLink } from "react-router-dom";
import { Row, links } from "../constants";
import styled from "styled-components";
import Logo_Transparent from "../images/logo/iGEMLogo_Transparent.svg";

const RowSpaced = styled(Row)`
  justify-content: space-between;
  margin: auto;
  padding: 3vw 5vw;
  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled.img`
  @media only screen and (min-width: 600px) {
    height: 5vw;
    padding-right: 2vw;
  }
  @media only screen and (max-width: 600px) {
    height: 25vw;
  }
`;

const Link = styled.p`
  font-weight: 600;
`;

export default function Header() {
  return (
    <RowSpaced>
      <Logo src={Logo_Transparent} />
      {links.map((l) => (
        <NavLink
          to={l.link}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <Link>{l.name}</Link>
        </NavLink>
      ))}
    </RowSpaced>
  );
}
