import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import { get_things_things } from "./__generated__/get_things";

const GET_THINGS = gql`
  query get_things {
    things {
      name
      id
    }
  }
`;

export default function Things() {
  const { data, error, loading } = useQuery(GET_THINGS);

  if (loading) return <div>loading…</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
      {data.things.map((thing: get_things_things) => (
        <div key={thing.id}>{thing.name}</div>
      ))}
    </div>
  );
}
