import css from "@emotion/css";
import produce from "immer";
import get from "lodash.get";
import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import useForm from "../../hooks/useForm";
import {
  createThing,
  createThingVariables,
} from "../../queryTypes/createThing";
import { getPlace, getPlaceVariables } from "../../queryTypes/getPlace";
import placeQuery from "../placeQuery.gql";
import { AddForm } from "../Places/NewPlace";
import createThingMutation from "./createThingMutation.gql";

interface NewThingProps {
  placeId: string;
}

export default function NewThing(props: NewThingProps) {
  const { setFormValues, values, handleEnterSubmit, reset } = useForm();
  const [isFocused, setFocus] = useState(false);

  const mutation = useMutation<createThing, createThingVariables>(
    createThingMutation,
    {
      update: (proxy, { data }) => {
        const current = proxy.readQuery<getPlace, getPlaceVariables>({
          query: placeQuery,
          variables: { id: props.placeId },
        });

        if (!current || !data) return;

        const newData = produce(current, draft => {
          if (draft.place) {
            const things = get(draft, "place.things", []);
            things.push({
              id: data.createThing.id,
              name: data.createThing.name,
              __typename: "Thing",
            });
            draft.place.things = things;
          }
        });

        proxy.writeQuery({
          query: placeQuery,
          variables: { id: props.placeId },
          data: newData,
        });
      },
    },
  );

  function addThing() {
    if (!values) return null;

    mutation({
      variables: {
        name: values.name,
        id: props.placeId,
      },
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
