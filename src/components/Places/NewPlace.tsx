import css from "@emotion/css";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { RouteComponentProps, withRouter } from "react-router";
import useForm from "../../hooks/useForm";
import {
  createPlace,
  createPlaceVariables,
} from "../../queryTypes/createPlace";
import { getAllPlaces } from "../../queryTypes/getAllPlaces";
import createPlaceMutation from "./createPlaceMutation.gql";
import placesQuery from "./placesQuery.gql";
import get from "lodash.get";

export const AddForm = styled.form`
  background: hsl(225, 33%, 94%);
  padding: 1rem;
  margin: 0 auto;
  margin-top: 3rem;
  min-width: 14rem;
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

const NewPlace: React.FC<RouteComponentProps> = function NewPlace(props) {
  const { setFormValues, values, handleEnterSubmit } = useForm();
  const [isFocused, setFocus] = useState(false);

  const addPlace = useMutation<createPlace, createPlaceVariables>(
    createPlaceMutation,
    {
      update: (proxy, { data }) => {
        const current = proxy.readQuery<getAllPlaces>({
          query: placesQuery,
        });

        const newPlace = get(data, `createPlace`);

        if (!current || !newPlace) return data;

        const currentPlaces = current.places || [];

        proxy.writeQuery({
          query: placesQuery,
          data: {
            places: currentPlaces.concat(newPlace),
          },
        });
      },
    },
  );

  async function addNewPlace(
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>,
  ) {
    e.preventDefault();
    if (!values) return;

    const { data, errors } = await addPlace({
      variables: {
        name: values.name,
      },
    });

    if (data && data.createPlace) {
      const id = data.createPlace.id;
      props.history.push(`/place/${id}`);
    }

    if (errors) {
      console.log(errors);
    }
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
