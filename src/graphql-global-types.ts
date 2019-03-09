/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface PlaceCreateInput {
  name: string;
  things?: ThingCreateManyWithoutPlaceInput | null;
}

export interface ThingCreateManyWithoutPlaceInput {
  create?: ThingCreateWithoutPlaceInput[] | null;
  connect?: ThingWhereUniqueInput[] | null;
}

export interface ThingCreateWithoutPlaceInput {
  name: string;
}

export interface ThingWhereUniqueInput {
  id?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
