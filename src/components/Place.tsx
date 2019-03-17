import { css } from "@emotion/core";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import usePlaceDeletion from "../hooks/places/usePlaceDeletion";
import {
  getPlace,
  getPlaceVariables,
  getPlace_place,
  getPlace_place_subPlaces,
} from "../queryTypes/getPlace";
import placeQuery from "./placeQuery.gql";
import NewThing from "./Things/NewThing";
import { maxWidth } from "./ui/MaxWidth";
import get from "lodash.get";

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

  h1 {
    span {
      font-size: 0.5em;
    }
    ul {
      font-size: 1rem;
    }

    ul,
    li {
      list-style: none;
      margin: 0;
      padding: 0;
      display: inline-block;
    }
    li {
      font-size: 0.75em;
      margin-left: 1em;
    }
  }
`;

interface PlaceRouteProps {
  placeId: string;
}

const Place: React.FC<RouteComponentProps<PlaceRouteProps>> = function Place({
  match,
}) {
  const id = match.params.placeId;

  const { deletePlace } = usePlaceDeletion(id);

  const { data, error, loading } = useQuery<getPlace, getPlaceVariables>(
    placeQuery,
    {
      variables: {
        id,
      },
    },
  );

  if (loading) return <div>loading…</div>;
  if (error) return <div>Error! Place {match.params.placeId} not found</div>;
  if (!data || !data.place) return null;

  const subPlaces = get(data, "place.subPlaces", []);

  return (
    <main css={thingContainer}>
      <nav>
        <Link css={backLink} to="/places">
          Back
        </Link>
        <button onClick={deletePlace}>Delete place</button>
      </nav>
      <h1>
        {data.place.name}
        {subPlaces.length > 0 && (
          <div>
            <span>Subplaces:</span>
            <ul>
              {subPlaces.map((subPlace: getPlace_place) => (
                <li key={subPlace.id}>
                  <Link to={`/place/${subPlace.id}`}>{subPlace.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </h1>

      {data.place.things ? (
        data.place.things.map(thing => {
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
