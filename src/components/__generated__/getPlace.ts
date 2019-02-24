/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPlace
// ====================================================

export interface getPlace_places_by_pk_things {
  __typename: "things";
  id: any;
  name: string;
}

export interface getPlace_places_by_pk {
  __typename: "places";
  id: number;
  name: string;
  /**
   * An array relationship
   */
  things: getPlace_places_by_pk_things[];
}

export interface getPlace {
  /**
   * fetch data from the table: "places" using primary key columns
   */
  places_by_pk: getPlace_places_by_pk | null;
}

export interface getPlaceVariables {
  id: number;
}
