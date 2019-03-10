import styled from "@emotion/styled";
import gql from "graphql-tag";
import React, { useState, KeyboardEventHandler } from "react";
import { useMutation } from "react-apollo-hooks";
import { RouteComponentProps, withRouter } from "react-router";
import useForm from "../../hooks/useForm";
import { createPlace, createPlaceVariables } from "./__generated__/createPlace";
import css from "@emotion/css";

interface NewPlaceProps extends RouteComponentProps {}

const ADD_PLACE = gql`
  mutation createPlace($data: PlaceCreateInput!) {
    createPlace(data: $data) {
      id
    }
  }
`;

export const AddForm = styled.form`
  background: hsl(225, 33%, 94%);
  padding: 1rem;
  margin: 0 auto;
  margin-top: 3rem;
  max-width: 20vw;
  border-radius: 10px;
  text-align: center;
  h1 {
    font-size: 0.75em;
    color: hsl(225, 23%, 40%);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  fieldset {
    border: 0;
    position: relative;
  }
  label {
    position: absolute;
    left: 2em;
    text-transform: uppercase;
    font-size: 65%;
    font-weight: 500;
    pointer-events: none;
    transition: all 0.2s ease-out;
  }
  textarea {
    border: 0;
    border-radius: 3px;
    height: 2em;
    width: calc(100% - 2em);
    padding: 0 1em;
    display: flex;
    align-items: center;
    resize: none;
    line-height: 2em;
    :focus {
      outline: none;
    }
  }
`;

const NewPlace: React.FC<NewPlaceProps> = function NewPlace(props) {
  const { setFormValues, values, handleEnterSubmit } = useForm();
  const [isFocused, setFocus] = useState(false);

  console.log(values)

  const addPlace = useMutation<createPlace, createPlaceVariables>(ADD_PLACE);

  function addNewPlace(
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>,
  ) {
    e.preventDefault();
    addPlace({variables: {
      data: {
        name: values!.name
      }
    }})
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
    <AddForm onSubmit={addNewPlace}>
      <h1>Add a new place</h1>
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
            onKeyPress={e => handleEnterSubmit(e, addNewPlace)}
            onChange={setFormValues}
          />
        </div>
      </fieldset>
    </AddForm>
  );
};

export default withRouter(NewPlace);
