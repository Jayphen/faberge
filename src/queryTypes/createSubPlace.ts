/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createSubPlace
// ====================================================

export interface createSubPlace_createSubplace {
  __typename: "Place";
  name: string;
  id: string;
}

export interface createSubPlace {
  createSubplace: createSubPlace_createSubplace | null;
}

export interface createSubPlaceVariables {
  name: string;
  parentId: string;
}
