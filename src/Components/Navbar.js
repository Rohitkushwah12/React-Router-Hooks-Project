import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const location = useLocation();
  return (
    <NavbarContainer>
      <NavbarLinkContainer>
        <NavbarLink className="nav-link active" to="/">
          Home
        </NavbarLink>
      </NavbarLinkContainer>
      <NavbarLinkContainer>
        <NavbarLink className="nav-link" to="/about" state={location}>
          About Us
        </NavbarLink>
      </NavbarLinkContainer>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const NavbarLinkContainer = styled.div`
  display: flex;
`;

const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  &:hover,
  &:focus {
    color: grey;
  }
  &:active {
    font-size: large;
  }
`;
export default Navbar;
