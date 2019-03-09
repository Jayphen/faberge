import * as React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import { Link } from "react-router-dom";
import Card from "../ui/Card";
import {
  getAllPlaces,
  getAllPlaces_places,
} from "../__generated__/getAllPlaces";
import { maxWidth } from "../ui/MaxWidth";
import NewPlace from "./NewPlace";
import { css } from "@emotion/core";

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
      things_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

export default function Places() {
  const { data, error, loading } = useQuery<getAllPlaces>(GET_PLACES);

  if (loading) return <div>loading…</div>;
  if (error) return <div>Error!</div>;

  const { places } = data!;

  return (
    <>
      <div
        css={css`
          ${placesGrid};
        `}
      >
        {places.map((place: getAllPlaces_places) => {
          return (
            <Card key={place.id}>
              <Link to={`place/${place.id}`}>
                <h1>{place.name}</h1>
                <p>Items: {place.things_aggregate.aggregate!.count}</p>
              </Link>
            </Card>
          );
        })}
      </div>
      <NewPlace />
    </>
  );
}
