/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: get_things
// ====================================================

export interface get_things_things {
  __typename: "things";
  name: string;
  id: any;
}

export interface get_things {
  /**
   * fetch data from the table: "things"
   */
  things: get_things_things[];
}
