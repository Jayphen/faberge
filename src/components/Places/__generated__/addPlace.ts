/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { places_insert_input } from "./../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: addPlace
// ====================================================

export interface addPlace_insert_places_returning {
  __typename: "places";
  id: number;
}

export interface addPlace_insert_places {
  __typename: "places_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: addPlace_insert_places_returning[];
}

export interface addPlace {
  /**
   * insert data into the table: "places"
   */
  insert_places: addPlace_insert_places | null;
}

export interface addPlaceVariables {
  objects: places_insert_input[];
}
