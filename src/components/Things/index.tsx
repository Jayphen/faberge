import React from "react";
import { useQuery } from "react-apollo-hooks";
import { getAllThings } from "../../queryTypes/getAllThings";
import thingsQuery from "./thingsQuery.gql";
import styled from "@emotion/styled";
import { maxWidth } from "../ui/MaxWidth";
import { Link } from "react-router-dom";

const ThingsContainer = styled("div")`
  ${maxWidth};
  display: grid;
  grid-gap: 1rem;
  a {
    text-decoration: none;
  }
  h1 {
    font-size: 1rem;
    color: black;
  }
  aside {
    font-size: 0.75em;
    text-transform: uppercase;
    font-weight: 500;
    color: hsl(0, 0%, 60%);
  }
`;
const Thing = styled("div")`
  background: white;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Things() {
  const { data, error, loading } = useQuery<getAllThings>(thingsQuery);

  if (loading) return <div>loading…</div>;
  if (error || !data) return <div>Error!</div>;

  const things = data.things || [];

  return things ? (
    <ThingsContainer>
      {things.map(
        thing =>
          thing && (
            <Link key={thing.id} to={`/place/${thing.place.id}`}>
              <Thing>
                <h1>{thing.name}</h1>
                <aside>{thing.place.name}</aside>
              </Thing>
            </Link>
          ),
      )}
    </ThingsContainer>
  ) : (
    <div>no things</div>
  );
}
