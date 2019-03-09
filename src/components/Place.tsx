import { css } from "@emotion/core";
import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import { RouteComponentProps } from "react-router";
import { getPlace, getPlaceVariables } from "./__generated__/getPlace";
import { Link } from "react-router-dom";
import { maxWidth } from "./ui/MaxWidth";
import usePlaceDeletion from "../hooks/places/usePlaceDeletion";

const backLink = css`
  font-size: 75%;
  color: #c0c0c0;
  padding: 1rem 0;
  text-decoration: underline;
  margin: 0;
  cursor: pointer;
  :hover {
    color: #000;
  }
`;
const thingContainer = css`
  ${maxWidth};
  background: white;
  padding: 1rem;
  border-radius: 6px;

  nav {
    display: flex;
    justify-content: space-between;

    button {
      ${backLink};
      background: none;
      border: 0;
    }
  }
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

  const { deletePlace } = usePlaceDeletion(id);

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
      <nav>
        <Link css={backLink} to="/places">
          Back
        </Link>
        <button onClick={deletePlace}>Delete place</button>
      </nav>
      <h1>{data.places_by_pk!.name}</h1>
      {data.places_by_pk!.things.map(thing => {
        return <div key={thing.id}>{thing.name}</div>;
      })}
    </main>
  );
};

export default Place;
