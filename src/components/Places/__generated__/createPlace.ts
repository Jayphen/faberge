/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { PlaceCreateInput } from "./../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: createPlace
// ====================================================

export interface createPlace_createPlace {
  __typename: "Place";
  id: string;
}

export interface createPlace {
  createPlace: createPlace_createPlace;
}

export interface createPlaceVariables {
  data: PlaceCreateInput;
}
