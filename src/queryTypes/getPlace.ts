/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPlace
// ====================================================

export interface getPlace_place_things {
  __typename: "Thing";
  id: string;
  name: string;
}

export interface getPlace_place_subPlaces {
  __typename: "Place";
  id: string;
  name: string;
}

export interface getPlace_place {
  __typename: "Place";
  id: string;
  name: string;
  things: getPlace_place_things[] | null;
  subPlaces: getPlace_place_subPlaces[] | null;
}

export interface getPlace {
  place: getPlace_place | null;
}

export interface getPlaceVariables {
  id: string;
}
