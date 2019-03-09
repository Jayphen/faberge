import { css } from "@emotion/core";
import React from "react";

const card = css`
  padding: 1rem;
  border-radius: 6px;
  background: white;
`;

const Card: React.FC<{}> = function Card(props) {
  return <section css={card}>{props.children}</section>;
};

export default Card;
