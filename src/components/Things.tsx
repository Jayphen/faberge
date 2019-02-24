import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

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
      {data.things.map((thing: any) => (
        <div key={thing.id}>{thing.name}</div>
      ))}
    </div>
  );
}
