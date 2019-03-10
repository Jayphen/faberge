import css from "@emotion/css";
import gql from "graphql-tag";
import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import useForm from "../../hooks/useForm";
import { GET_PLACE } from "../Place";
import { AddForm } from "../Places/NewPlace";
import { getPlace } from "../__generated__/getPlace";
import { createThing, createThingVariables } from "./__generated__/createThing";

const ADD_THING = gql`
  mutation createThing($name: String!, $id: ID!) {
    createThing(data: { name: $name, place: { connect: { id: $id } } }) {
      id
      name
    }
  }
`;

interface NewThingProps {
  placeId: string;
}

export default function NewThing(props: NewThingProps) {
  const { setFormValues, values, handleEnterSubmit, reset } = useForm();
  const [isFocused, setFocus] = useState(false);

  console.log(values);

  const mutation = useMutation<createThing, createThingVariables>(ADD_THING, {
    update: (proxy, { data }) => {
      const current = proxy.readQuery<getPlace>({
        query: GET_PLACE,
        variables: { id: props.placeId },
      });

      if (!current) return;

      current.place!.things!.push({
        id: data!.createThing.id,
        name: data!.createThing.name,
        __typename: "Thing",
      });

      proxy.writeQuery({
        query: GET_PLACE,
        variables: { id: props.placeId },
        data: current,
      });
    },
  });

  function addThing() {
    mutation({
      variables: {
        name: values!.name,
        id: props.placeId
      }
    })
      .then(
        resp => {
          reset();
          return resp;
        },
        err => console.log(err),
      )
      .catch(error => console.log(error));
  }

  return (
    <AddForm onSubmit={() => addThing()}>
      <h1>Create a new thing</h1>
      <fieldset>
        <div>
          <label
            css={css`
              top: ${isFocused ? "-1em" : "1em"};
              opacity: ${isFocused ? 0.3 : 1};
            `}
          >
            Name
          </label>
          <textarea
            name="name"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onKeyPress={e => handleEnterSubmit(e, addThing)}
            value={values ? values.name : ""}
            onChange={setFormValues}
            css={
              !isFocused &&
              css`
                color: rgba(0, 0, 0, 0.1);
              `
            }
          />
        </div>
      </fieldset>
    </AddForm>
  );
}
