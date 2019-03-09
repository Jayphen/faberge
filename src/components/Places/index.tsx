import { css } from "@emotion/core";
import gql from "graphql-tag";
import * as React from "react";
import { useQuery } from "react-apollo-hooks";
import { Link } from "react-router-dom";
import Card from "../ui/Card";
import { maxWidth } from "../ui/MaxWidth";
import NewPlace from "./NewPlace";
import { getAllPlaces } from "./__generated__/getAllPlaces";

const placesGrid = css`
  ${maxWidth};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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

const GET_PLACES = gql`
  query getAllPlaces {
    places {
      name
      id
      things {
        id
      }
    }
  }
`;

export default function Places() {
  const { data, error, loading } = useQuery<getAllPlaces>(GET_PLACES, {
    // TODO: instead use cache when deleting a place
    fetchPolicy: "cache-and-network",
  });

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
