/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllPlaces
// ====================================================

export interface getAllPlaces_places_things {
  __typename: "Thing";
  id: string;
}

export interface getAllPlaces_places {
  __typename: "Place";
  name: string;
  id: string;
  things: getAllPlaces_places_things[] | null;
}

export interface getAllPlaces {
  places: getAllPlaces_places[] | null;
}
