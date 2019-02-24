/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllThings
// ====================================================

export interface getAllThings_things {
  __typename: "things";
  id: any;
  name: string;
}

export interface getAllThings {
  /**
   * fetch data from the table: "things"
   */
  things: getAllThings_things[];
}
