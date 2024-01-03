import { NavLink } from "react-router-dom";
import { links } from "../constants";
import styled from "styled-components";
import Logo_Transparent from "../images/logo/iGEMLogo_Transparent.svg";

const RowSpaced = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  padding: 10px 5vw;
`;

const Logo = styled.img`
  height: 12vh;
  padding-right: 2vw;
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
