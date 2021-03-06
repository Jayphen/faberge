import { Link } from "react-router-dom";
import React from "react";
import { css } from "@emotion/core";

const navigation = css`
  text-align: center;
  margin-bottom: 3rem;

  a {
    padding: 1rem 3rem;
    color: salmon;
    :hover {
      color: pink;
    }
  }
`;

function Header() {
  return (
    <nav css={navigation}>
      <Link to="/" css={{ color: "hotpink" }}>
        Home
      </Link>
      <Link to="/things">Things</Link>
      <Link to="/places">Places</Link>
    </nav>
  );
}

export default Header;
