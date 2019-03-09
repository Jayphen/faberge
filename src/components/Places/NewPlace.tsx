import gql from "graphql-tag";
import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { RouteComponentProps, withRouter } from "react-router";
import { createPlace, createPlaceVariables } from "./__generated__/createPlace";
import useForm from "../../hooks/useForm";

interface NewPlaceProps extends RouteComponentProps {}

const ADD_PLACE = gql`
  mutation createPlace($data: PlaceCreateInput!) {
    createPlace(data: $data) {
      id
    }
  }
`;

const NewPlace: React.FC<NewPlaceProps> = function NewPlace(props) {
  const { setFormValues, values } = useForm();

  const addPlace = useMutation<createPlace, createPlaceVariables>(ADD_PLACE, {
    variables: {
      data: {
        ...values,
      },
    },
  });

  function addNewPlace(e: React.FormEvent<HTMLFormElement>) {
    console.log(e);
    e.preventDefault();
    addPlace()
      .then(
        resp => {
          if (resp.data) {
            const id = resp.data.createPlace.id;
            props.history.push(`/place/${id}`);
          }

          return;
        },
        err => console.log(err),
      )
      .catch(error => console.log(error));
  }

  return (
    <form onSubmit={e => addNewPlace(e)}>
      <h1>Add a new place</h1>
      <fieldset>
        <div>
          <label>Name</label>
          <input name="name" type="text" onChange={setFormValues} />
        </div>
      </fieldset>
    </form>
  );
};

export default withRouter(NewPlace);
