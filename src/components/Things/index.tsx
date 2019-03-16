import React from "react";
import { useQuery } from "react-apollo-hooks";
import { getAllThings } from "../../queryTypes/getAllThings";
import thingsQuery from "./thingsQuery.gql";

export default function Things() {
  const { data, error, loading } = useQuery<getAllThings>(thingsQuery);

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
