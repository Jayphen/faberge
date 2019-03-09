import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import { getAllThings } from "../__generated__/getAllThings";

const GET_THINGS = gql`
  query getAllThings {
    things {
      id
      name
    }
  }
`;

export default function Things() {
  const { data, error, loading } = useQuery<getAllThings>(GET_THINGS);

  if (loading) return <div>loading…</div>;
  if (error || !data) return <div>Error!</div>;

  const things = data.things || [];

  return things ? (
    <div>
      {things.map(thing => thing && <div key={thing.id}>{thing.name}</div>)}
    </div>
  ) : (
    <div>no things</div>
  );
}
