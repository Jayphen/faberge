import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import { getAllThings_things } from "./__generated__/getAllThings";

const GET_THINGS = gql`
  query getAllThings {
    things {
      id
      name
    }
  }
`;

export default function Things() {
  const { data, error, loading } = useQuery(GET_THINGS);

  if (loading) return <div>loading…</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
      {data.things.map((thing: getAllThings_things) => (
        <div key={thing.id}>{thing.name}</div>
      ))}
    </div>
  );
}
