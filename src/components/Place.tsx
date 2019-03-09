import { css } from "@emotion/core";
import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import usePlaceDeletion from "../hooks/places/usePlaceDeletion";
import { maxWidth } from "./ui/MaxWidth";
import { getPlace, getPlaceVariables } from "./__generated__/getPlace";
import NewThing from "./Things/NewThing";

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
  query getPlace($id: ID!) {
    place(where: { id: $id }) {
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
  const id = match.params.placeId;

  const { deletePlace } = usePlaceDeletion(id);

  const { data, error, loading } = useQuery<getPlace, getPlaceVariables>(
    GET_PLACE,
    {
      variables: {
        id,
      },
    },
  );

  if (loading) return <div>loading…</div>;
  if (error) return <div>Error! Place {match.params.placeId} not found</div>;
  if (!data || !data.place) return null;

  const things = data.place.things || [];

  return (
    <main css={thingContainer}>
      <nav>
        <Link css={backLink} to="/places">
          Back
        </Link>
        <button onClick={deletePlace}>Delete place</button>
      </nav>
      <h1>{data.place.name}</h1>

      {things.length > 0 ? (
        things.map(thing => {
          return <div key={thing.id}>{thing.name}</div>;
        })
      ) : (
        <div
          css={css`
            color: hsl(0, 0%, 60%);
          `}
        >
          no things!
        </div>
      )}

      <NewThing placeId={id} />
    </main>
  );
};

export default Place;
