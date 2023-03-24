import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #8f43ee;
  }
`;

function Navbar() {
  return (
    <div className="navbarContainer">
      <ul id="nav" className="itmeList">
        <li>
          <StyledLink to="/">HOME</StyledLink>
        </li>
        <li>
          <StyledLink to="/create-post">CREATE POST</StyledLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
