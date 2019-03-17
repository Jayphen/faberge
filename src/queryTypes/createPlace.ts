/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createPlace
// ====================================================

export interface createPlace_createPlace_things {
  __typename: "Thing";
  id: string;
}

export interface createPlace_createPlace {
  __typename: "Place";
  name: string;
  id: string;
  things: createPlace_createPlace_things[] | null;
}

export interface createPlace {
  createPlace: createPlace_createPlace | null;
}

export interface createPlaceVariables {
  name: string;
}
