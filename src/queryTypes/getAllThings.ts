/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllThings
// ====================================================

export interface getAllThings_things_place {
  __typename: "Place";
  id: string;
  name: string;
}

export interface getAllThings_things {
  __typename: "Thing";
  id: string;
  name: string;
  place: getAllThings_things_place;
}

export interface getAllThings {
  things: getAllThings_things[];
}
