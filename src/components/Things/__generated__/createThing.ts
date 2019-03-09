/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createThing
// ====================================================

export interface createThing_createThing {
  __typename: "Thing";
  id: string;
  name: string;
}

export interface createThing {
  createThing: createThing_createThing;
}

export interface createThingVariables {
  name: string;
  id: string;
}
