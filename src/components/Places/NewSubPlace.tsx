import React from "react";
import { useMutation } from "react-apollo-hooks";
import useForm from "../../hooks/useForm";
import {
  createSubPlace,
  createSubPlaceVariables,
} from "../../queryTypes/createSubPlace";
import createSubPlaceMutation from "./createSubPlaceMutation.gql";
import { AddForm } from "./NewPlace";
import { updateStoreWithNewSubPlace } from "../../optimistic/updates";

const NewSubPlace: React.FC<{ parentId: string }> = function NewSubPlace({
  parentId,
}) {
  const { setFormValues, values, handleEnterSubmit } = useForm();
  const addSubPlace = useMutation<createSubPlace, createSubPlaceVariables>(
    createSubPlaceMutation,
    {
      update: (proxy, { data }) =>
        data &&
        updateStoreWithNewSubPlace(proxy, data, {
          id: parentId,
        }),
    },
  );

  async function addThePlace(
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>,
  ) {
    e.preventDefault();
    if (!values) return;

    const { data } = await addSubPlace({
      variables: { name: values.name, parentId },
    });

    if (data && data.createSubplace) {
      console.log(`new sub place created, ${data.createSubplace.name}`);
    }
  }

  return (
    <AddForm>
      <h1>Add a sub place</h1>
      <fieldset>
        <div>
          <label>Name</label>
          <textarea
            name="name"
            onKeyPress={e => handleEnterSubmit(e, addThePlace)}
            onChange={setFormValues}
          />
        </div>
      </fieldset>
    </AddForm>
  );
};

export default NewSubPlace;
