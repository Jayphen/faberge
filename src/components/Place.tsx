import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import { RouteComponentProps } from "react-router";
import { getPlace } from "./__generated__/getPlace";
import { Link } from "react-router-dom";

interface PlaceRouteProps {
  placeId: string;
}

const GET_PLACE = gql`
  query getPlace($id: Int!) {
    places_by_pk(id: $id) {
      id
      name
      things {
        id
        name
      }
    }
  }
`;

const Place: React.FC<RouteComponentProps<PlaceRouteProps>> = function Place({
  match,
}) {
  const id = parseInt(match.params.placeId, 10);

  const { data, error, loading } = useQuery<getPlace>(GET_PLACE, {
    variables: {
      id: isNaN(id) ? 0 : id,
    },
  });

  if (loading) return <div>loading…</div>;
  if (error || !data!.places_by_pk)
    return <div>Error! Place {match.params.placeId} not found</div>;

  return (
    <>
      <Link to="/places">Back</Link>
      <h1>{data!.places_by_pk!.name}</h1>
      {data!.places_by_pk.things.map(thing => {
        return <div key={thing.id}>{thing.name}</div>;
      })}
    </>
  );
};

export default Place;
