import gql from "graphql-tag";
import React, { ReactNode } from "react";
import { useMutation } from "react-apollo-hooks";
import useForm from "../../hooks/useForm";
import { createThing, createThingVariables } from "./__generated__/createThing";

const ADD_THING = gql`
  mutation createThing($name: String!, $id: ID!) {
    createThing(data: { name: $name, place: { connect: { id: $id } } }) {
      id
    }
  }
`;

interface NewThingProps {
  placeId: string;
}

export default function NewThing(props: NewThingProps) {
  const { setFormValues, values } = useForm();

  const addThing = useMutation<createThing, createThingVariables>(ADD_THING, {
    variables: {
      ...values,
      id: props.placeId,
    },
  });

  return (
    <>
      <h1>Create a new thing</h1>
      <form onSubmit={() => addThing()}>
        <input type="text" name="name" onChange={setFormValues} />
        <button>Create thing</button>
      </form>
    </>
  );
}
