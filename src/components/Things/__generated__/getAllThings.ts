/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllThings
// ====================================================

export interface getAllThings_things {
  __typename: "Thing";
  id: string;
  name: string;
}

export interface getAllThings {
  things: (getAllThings_things | null)[];
}
