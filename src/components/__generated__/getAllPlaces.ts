/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllPlaces
// ====================================================

export interface getAllPlaces_places_things_aggregate_aggregate {
  __typename: "things_aggregate_fields";
  count: number | null;
}

export interface getAllPlaces_places_things_aggregate {
  __typename: "things_aggregate";
  aggregate: getAllPlaces_places_things_aggregate_aggregate | null;
}

export interface getAllPlaces_places {
  __typename: "places";
  name: string;
  id: number;
  /**
   * An aggregated array relationship
   */
  things_aggregate: getAllPlaces_places_things_aggregate;
}

export interface getAllPlaces {
  /**
   * fetch data from the table: "places"
   */
  places: getAllPlaces_places[];
}
