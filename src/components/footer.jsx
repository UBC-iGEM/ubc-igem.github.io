import React from "react";
import Logo_Transparent from "../images/logo/iGEMLogo_Transparent.svg";
import Blob from "../images/footer/footer_blob.svg";
import IG from "../images/social-media/instagram.svg";
import Linkedin from "../images/social-media/linkedin.svg";
import Email from "../images/social-media/email.svg";
import styled from "styled-components";
import { Link } from "gatsby";
import { Col, Row } from "./constants";

const Background = styled.div`
  background-image: url(${Blob});
  background-repeat: no-repeat;
  min-height: fit-content;
`;

const Logo = styled.img`
  height: 20vh;
  margin: auto;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const RowSpaced = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 15vh;
`;

const LeftSide = styled(Row)`
  padding-left: 5vw;
`;

const ColSpaced = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10vw 0 0;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const LinkStyle = styled.p`
  font-weight: 600;
  margin: 0;
  padding: 5px;
`;

const Links = styled(Col)`
  padding: 5vh 5vw;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Imgs = styled.div`
  padding: 5vh 5px;
`;

const Icon = styled.img`
  height: 3vw;
  padding-left: 10px;
`;

export default function Footer() {
  return (
    <Background>
      <RowSpaced>
        <LeftSide>
          <Logo src={Logo_Transparent} />
          <Links>
            {[
              { link: "/about", name: "about" },
              { link: "/team", name: "our team" },
              { link: "/sponsors", name: "sponsors" },
              { link: "/join", name: "join us" },
            ].map((l) => (
              <Link
                to={l.link}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <LinkStyle>{l.name}</LinkStyle>
              </Link>
            ))}
          </Links>
        </LeftSide>

        <ColSpaced>
          <Link
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <LinkStyle>contact us</LinkStyle>
          </Link>
          <Imgs className="row">
            {[
              { svg: Email, href: "mailto:ubcigem@gmail.com" },
              { svg: IG, href: "https://www.instagram.com/ubcigem" },
              {
                svg: Linkedin,
                href: "https://www.linkedin.com/company/ubc-igem",
              },
            ].map((sm) => (
              <a href={sm.href}>
                <Icon src={sm.svg} />
              </a>
            ))}
          </Imgs>
        </ColSpaced>
      </RowSpaced>
    </Background>
  );
}
