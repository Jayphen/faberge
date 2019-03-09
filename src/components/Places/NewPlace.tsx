import gql from "graphql-tag";
import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { RouteComponentProps, withRouter } from "react-router";
import { addPlace, addPlaceVariables } from "./__generated__/addPlace";

interface NewPlaceProps extends RouteComponentProps {}

const ADD_PLACE = gql`
  mutation addPlace($objects: [places_insert_input!]!) {
    insert_places(objects: $objects) {
      returning {
        id
      }
    }
  }
`;

const NewPlace: React.FC<NewPlaceProps> = function NewPlace(props) {
  const [values, setValues] = useState();

  function setFormValues(event: React.FormEvent<HTMLInputElement>) {
    const {
      currentTarget: { value, name },
    } = event;

    setValues({
      [name]: value,
    });
  }

  const addPlace = useMutation<addPlace, addPlaceVariables>(ADD_PLACE, {
    variables: {
      objects: [
        {
          ...values,
        },
      ],
    },
  });

  function addNewPlace(e: React.FormEvent<HTMLFormElement>) {
    console.log(e);
    e.preventDefault();
    addPlace()
      .then(
        resp => {
          if (resp.data) {
            const id = resp.data.insert_places!.returning[0].id;
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
