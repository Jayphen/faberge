/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const card = css`
  padding: 1rem;
  border-radius: 6px;
  background: white;
`;

const Card: React.FC<{}> = function Card(props) {
  return <section css={card}>{props.children}</section>;
};

export default Card;
