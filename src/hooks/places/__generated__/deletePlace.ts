/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deletePlace
// ====================================================

export interface deletePlace_delete_places {
  __typename: "places_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface deletePlace {
  /**
   * delete data from the table: "places"
   */
  delete_places: deletePlace_delete_places | null;
}

export interface deletePlaceVariables {
  id: number;
}
