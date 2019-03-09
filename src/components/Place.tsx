import { css } from "@emotion/core";
import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import { RouteComponentProps } from "react-router";
import { getPlace, getPlaceVariables } from "./__generated__/getPlace";
import { Link } from "react-router-dom";
import { maxWidth } from "./ui/MaxWidth";

const thingContainer = css`
  ${maxWidth};
  background: white;
  padding: 1rem;
  border-radius: 6px;
`;
const backLink = css`
  font-size: 75%;
  color: #c0c0c0;
  padding: 1rem 0;
`;

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

  const { data, error, loading } = useQuery<getPlace, getPlaceVariables>(
    GET_PLACE,
    {
      variables: {
        id: isNaN(id) ? 0 : id,
      },
    },
  );

  if (loading) return <div>loading…</div>;
  if (!data) return null;
  if (error) return <div>Error! Place {match.params.placeId} not found</div>;

  return (
    <main css={thingContainer}>
      <Link css={backLink} to="/places">
        Back
      </Link>
      <h1>{data.places_by_pk!.name}</h1>
      {data.places_by_pk!.things.map(thing => {
        return <div key={thing.id}>{thing.name}</div>;
      })}
    </main>
  );
};

export default Place;
