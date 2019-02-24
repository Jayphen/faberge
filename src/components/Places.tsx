import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import { Link } from "react-router-dom";
import {
  getAllPlaces,
  getAllPlaces_places,
} from "./__generated__/getAllPlaces";

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
    <div>
      {places.map((place: getAllPlaces_places) => {
        return (
          <div key={place.id}>
            <Link to={`place/${place.id}`}>
              {place.name} - {place.things_aggregate.aggregate!.count}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
