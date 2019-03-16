/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PlaceWithThings
// ====================================================

export interface PlaceWithThings_things {
  __typename: "Thing";
  id: string;
}

export interface PlaceWithThings {
  __typename: "Place";
  name: string;
  id: string;
  things: PlaceWithThings_things[] | null;
}
