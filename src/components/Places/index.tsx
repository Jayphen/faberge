import { css } from "@emotion/core";
import * as React from "react";
import { useQuery } from "react-apollo-hooks";
import { Link } from "react-router-dom";
import { getAllPlaces } from "../../queryTypes/getAllPlaces";
import Card from "../ui/Card";
import { maxWidth } from "../ui/MaxWidth";
import NewPlace from "./NewPlace";
import placesQuery from "./placesQuery.gql";

const placesGrid = css`
  ${maxWidth};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  grid-gap: 1rem;
  a {
    display: block;
    text-decoration: none;
    color: #797979;
    :hover h1 {
      color: salmon;
    }
  }
  h1 {
    font-size: 1.5rem;
    transition: color 0.2s ease;
    color: black;
  }
`;

export default function Places() {
  const { data, error, loading } = useQuery<getAllPlaces>(placesQuery);

  if (loading) return <div>loading…</div>;
  if (error || !data) return <div>Error!</div>;

  return (
    <>
      <div
        css={css`
          ${placesGrid};
        `}
      >
        {data.places.map(place => {
          return (
            place && (
              <Card key={place.id}>
                <Link to={`place/${place.id}`}>
                  <h1>{place.name}</h1>
                  {place.things && <p>Items: {place.things.length}</p>}
                </Link>
              </Card>
            )
          );
        })}
      </div>
      <NewPlace />
    </>
  );
}
