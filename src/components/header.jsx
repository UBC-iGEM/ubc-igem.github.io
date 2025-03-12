import React from "react";
import { Center, links } from "./constants";
import styled from "styled-components";
import Logo_Transparent from "../images/logo/iGEMLogo_Transparent.svg";
import { useEffect, useRef, useState } from "react";
import CancelImage from "../images/social-media/close.png";
import { Link } from "gatsby";

// https://jfelix.info/blog/create-a-mobile-friendly-navigation-with-react

export default function Header() {
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <NavBar.Wrapper>
      <NavBar.Logo src={Logo_Transparent} alt="igem-header-logo" />

      <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
        <HamburgerButton.Lines />
      </HamburgerButton.Wrapper>

      <NavBar.Links ref={drawerRef} openDrawer={openDrawer}>
        {links.map((l) => (
            <Link to={l.link}>
              <NavBar.Link>{l.name}</NavBar.Link>
            </Link>


          // The below code works but needs to ensure style consistency
          // <li key={l.name}>
          // <Link to={l.link}>
          //   {l.name}
          // </Link>
          // </li>
        ))}
        <Center>
          <CancelImageStyle
            src={CancelImage}
            onClick={() => toggleDrawer(false)}
          />
        </Center>
      </NavBar.Links>
    </NavBar.Wrapper>
  );
}

const NavBar = {
  Wrapper: styled.nav`
    display: flex;
    align-items: center;

    @media only screen and (min-width: 600px) {
      padding: 1rem 3rem;
      justify-content: space-between;
    }

    @media only screen and (max-width: 600px) {
      position: fixed;
      width: 100vw;
      bottom: 0;
      background-color: #b1cbc0;
      justify-content: space-around;
      z-index: 10;  //Ensures the header appears above
    }
  `,
  Logo: styled.img`
    @media only screen and (min-width: 600px) {
      height: 5vw;
      padding: 0.5rem 1rem;
    }
    @media only screen and (max-width: 600px) {
      height: 15vw;
      padding: 0.5rem 1rem;
    }
  `,
  Links: styled.ul`
    display: flex;
    list-style: none;

    @media only screen and (max-width: 600px) {
      position: fixed;
      right: 0;
      top: 0;

      height: 100%;

      flex-direction: column;

      background-color: #b1cbc0;
      padding: 1rem 2rem;
      margin: 0;

      transform: ${({ openDrawer }) =>
        openDrawer ? `translateX(0)` : `translateX(100%)`};
    }
  `,
  Link: styled.li`
    padding: 0 1rem;
    cursor: pointer;

    @media only screen and (max-width: 600px) {
      padding: 1rem 0;
    }
  `,
};

const CancelImageStyle = styled.img`
  width: 15vw;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const HamburgerButton = {
  Wrapper: styled.button`
    height: 3rem;
    width: 3rem;
    position: relative;
    font-size: 12px;
    display: none;

    @media only screen and (max-width: 600px) {
      display: block;
    }

    /* Remove default button styles */
    border: none;
    background: transparent;
    outline: none;

    cursor: pointer;

    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 150%;
      width: 150%;
      top: -25%;
      left: -25%;
    }
  `,
  Lines: styled.div`
    top: 50%;
    margin-top: -0.125em;

    &,
    &:after,
    &:before {
      height: 2px;
      pointer-events: none;
      display: block;
      content: "";
      width: 100%;
      background-color: black;
      position: absolute;
    }

    &:after {
      /* Move bottom line below center line */
      top: -0.8rem;
    }

    &:before {
      /* Move top line on top of center line */
      top: 0.8rem;
    }
  `,
};
