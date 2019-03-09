/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * unique or primary key constraints on table "places"
 */
export enum places_constraint {
  places_pkey = "places_pkey",
}

/**
 * update columns of table "places"
 */
export enum places_update_column {
  id = "id",
  name = "name",
}

/**
 * unique or primary key constraints on table "things"
 */
export enum things_constraint {
  things_pkey = "things_pkey",
}

/**
 * update columns of table "things"
 */
export enum things_update_column {
  date_added = "date_added",
  id = "id",
  name = "name",
  place_id = "place_id",
}

/**
 * input type for inserting data into table "places"
 */
export interface places_insert_input {
  id?: number | null;
  name?: string | null;
  things?: things_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "places"
 */
export interface places_obj_rel_insert_input {
  data: places_insert_input;
  on_conflict?: places_on_conflict | null;
}

/**
 * on conflict condition type for table "places"
 */
export interface places_on_conflict {
  constraint: places_constraint;
  update_columns: places_update_column[];
}

/**
 * input type for inserting array relation for remote table "things"
 */
export interface things_arr_rel_insert_input {
  data: things_insert_input[];
  on_conflict?: things_on_conflict | null;
}

/**
 * input type for inserting data into table "things"
 */
export interface things_insert_input {
  date_added?: any | null;
  id?: any | null;
  name?: string | null;
  place?: places_obj_rel_insert_input | null;
  place_id?: number | null;
}

/**
 * on conflict condition type for table "things"
 */
export interface things_on_conflict {
  constraint: things_constraint;
  update_columns: things_update_column[];
}

//==============================================================
// END Enums and Input Objects
//==============================================================
