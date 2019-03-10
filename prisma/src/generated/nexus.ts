/**
 * This file was automatically generated by Nexus 0.11.2
 * Do not make changes to this file directly
 */




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  PlaceCreateInput: { // input type
    name: string; // String!
    things?: NexusGenInputs['ThingCreateManyWithoutPlaceInput'] | null; // ThingCreateManyWithoutPlaceInput
  }
  PlaceCreateOneWithoutThingsInput: { // input type
    connect?: NexusGenInputs['PlaceWhereUniqueInput'] | null; // PlaceWhereUniqueInput
    create?: NexusGenInputs['PlaceCreateWithoutThingsInput'] | null; // PlaceCreateWithoutThingsInput
  }
  PlaceCreateWithoutThingsInput: { // input type
    name: string; // String!
  }
  PlaceUpdateInput: { // input type
    name?: string | null; // String
    things?: NexusGenInputs['ThingUpdateManyWithoutPlaceInput'] | null; // ThingUpdateManyWithoutPlaceInput
  }
  PlaceUpdateManyMutationInput: { // input type
    name?: string | null; // String
  }
  PlaceUpdateOneWithoutThingsInput: { // input type
    connect?: NexusGenInputs['PlaceWhereUniqueInput'] | null; // PlaceWhereUniqueInput
    create?: NexusGenInputs['PlaceCreateWithoutThingsInput'] | null; // PlaceCreateWithoutThingsInput
    delete?: boolean | null; // Boolean
    disconnect?: boolean | null; // Boolean
    update?: NexusGenInputs['PlaceUpdateWithoutThingsDataInput'] | null; // PlaceUpdateWithoutThingsDataInput
    upsert?: NexusGenInputs['PlaceUpsertWithoutThingsInput'] | null; // PlaceUpsertWithoutThingsInput
  }
  PlaceUpdateWithoutThingsDataInput: { // input type
    name?: string | null; // String
  }
  PlaceUpsertWithoutThingsInput: { // input type
    create: NexusGenInputs['PlaceCreateWithoutThingsInput']; // PlaceCreateWithoutThingsInput!
    update: NexusGenInputs['PlaceUpdateWithoutThingsDataInput']; // PlaceUpdateWithoutThingsDataInput!
  }
  PlaceWhereInput: { // input type
    AND?: NexusGenInputs['PlaceWhereInput'][] | null; // [PlaceWhereInput!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['PlaceWhereInput'][] | null; // [PlaceWhereInput!]
    OR?: NexusGenInputs['PlaceWhereInput'][] | null; // [PlaceWhereInput!]
    things_every?: NexusGenInputs['ThingWhereInput'] | null; // ThingWhereInput
    things_none?: NexusGenInputs['ThingWhereInput'] | null; // ThingWhereInput
    things_some?: NexusGenInputs['ThingWhereInput'] | null; // ThingWhereInput
  }
  PlaceWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  ThingCreateInput: { // input type
    name: string; // String!
    place?: NexusGenInputs['PlaceCreateOneWithoutThingsInput'] | null; // PlaceCreateOneWithoutThingsInput
  }
  ThingCreateManyWithoutPlaceInput: { // input type
    connect?: NexusGenInputs['ThingWhereUniqueInput'][] | null; // [ThingWhereUniqueInput!]
    create?: NexusGenInputs['ThingCreateWithoutPlaceInput'][] | null; // [ThingCreateWithoutPlaceInput!]
  }
  ThingCreateWithoutPlaceInput: { // input type
    name: string; // String!
  }
  ThingScalarWhereInput: { // input type
    AND?: NexusGenInputs['ThingScalarWhereInput'][] | null; // [ThingScalarWhereInput!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['ThingScalarWhereInput'][] | null; // [ThingScalarWhereInput!]
    OR?: NexusGenInputs['ThingScalarWhereInput'][] | null; // [ThingScalarWhereInput!]
  }
  ThingUpdateInput: { // input type
    name?: string | null; // String
    place?: NexusGenInputs['PlaceUpdateOneWithoutThingsInput'] | null; // PlaceUpdateOneWithoutThingsInput
  }
  ThingUpdateManyDataInput: { // input type
    name?: string | null; // String
  }
  ThingUpdateManyMutationInput: { // input type
    name?: string | null; // String
  }
  ThingUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['ThingUpdateManyDataInput']; // ThingUpdateManyDataInput!
    where: NexusGenInputs['ThingScalarWhereInput']; // ThingScalarWhereInput!
  }
  ThingUpdateManyWithoutPlaceInput: { // input type
    connect?: NexusGenInputs['ThingWhereUniqueInput'][] | null; // [ThingWhereUniqueInput!]
    create?: NexusGenInputs['ThingCreateWithoutPlaceInput'][] | null; // [ThingCreateWithoutPlaceInput!]
    delete?: NexusGenInputs['ThingWhereUniqueInput'][] | null; // [ThingWhereUniqueInput!]
    deleteMany?: NexusGenInputs['ThingScalarWhereInput'][] | null; // [ThingScalarWhereInput!]
    disconnect?: NexusGenInputs['ThingWhereUniqueInput'][] | null; // [ThingWhereUniqueInput!]
    set?: NexusGenInputs['ThingWhereUniqueInput'][] | null; // [ThingWhereUniqueInput!]
    update?: NexusGenInputs['ThingUpdateWithWhereUniqueWithoutPlaceInput'][] | null; // [ThingUpdateWithWhereUniqueWithoutPlaceInput!]
    updateMany?: NexusGenInputs['ThingUpdateManyWithWhereNestedInput'][] | null; // [ThingUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['ThingUpsertWithWhereUniqueWithoutPlaceInput'][] | null; // [ThingUpsertWithWhereUniqueWithoutPlaceInput!]
  }
  ThingUpdateWithWhereUniqueWithoutPlaceInput: { // input type
    data: NexusGenInputs['ThingUpdateWithoutPlaceDataInput']; // ThingUpdateWithoutPlaceDataInput!
    where: NexusGenInputs['ThingWhereUniqueInput']; // ThingWhereUniqueInput!
  }
  ThingUpdateWithoutPlaceDataInput: { // input type
    name?: string | null; // String
  }
  ThingUpsertWithWhereUniqueWithoutPlaceInput: { // input type
    create: NexusGenInputs['ThingCreateWithoutPlaceInput']; // ThingCreateWithoutPlaceInput!
    update: NexusGenInputs['ThingUpdateWithoutPlaceDataInput']; // ThingUpdateWithoutPlaceDataInput!
    where: NexusGenInputs['ThingWhereUniqueInput']; // ThingWhereUniqueInput!
  }
  ThingWhereInput: { // input type
    AND?: NexusGenInputs['ThingWhereInput'][] | null; // [ThingWhereInput!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['ThingWhereInput'][] | null; // [ThingWhereInput!]
    OR?: NexusGenInputs['ThingWhereInput'][] | null; // [ThingWhereInput!]
    place?: NexusGenInputs['PlaceWhereInput'] | null; // PlaceWhereInput
  }
  ThingWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
}

export interface NexusGenEnums {
  PlaceOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  ThingOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
}

export interface NexusGenRootTypes {
  AggregatePlace: { // root type
    count: number; // Int!
  }
  AggregateThing: { // root type
    count: number; // Int!
  }
  BatchPayload: { // root type
    count: any; // Long!
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Place: { // root type
    id: string; // ID!
    name: string; // String!
  }
  PlaceConnection: { // root type
    edges: NexusGenRootTypes['PlaceEdge'][]; // [PlaceEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  PlaceEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Place']; // Place!
  }
  Query: {};
  Thing: { // root type
    id: string; // ID!
    name: string; // String!
  }
  ThingConnection: { // root type
    edges: NexusGenRootTypes['ThingEdge'][]; // [ThingEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  ThingEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Thing']; // Thing!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  Long: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  PlaceCreateInput: NexusGenInputs['PlaceCreateInput'];
  PlaceCreateOneWithoutThingsInput: NexusGenInputs['PlaceCreateOneWithoutThingsInput'];
  PlaceCreateWithoutThingsInput: NexusGenInputs['PlaceCreateWithoutThingsInput'];
  PlaceUpdateInput: NexusGenInputs['PlaceUpdateInput'];
  PlaceUpdateManyMutationInput: NexusGenInputs['PlaceUpdateManyMutationInput'];
  PlaceUpdateOneWithoutThingsInput: NexusGenInputs['PlaceUpdateOneWithoutThingsInput'];
  PlaceUpdateWithoutThingsDataInput: NexusGenInputs['PlaceUpdateWithoutThingsDataInput'];
  PlaceUpsertWithoutThingsInput: NexusGenInputs['PlaceUpsertWithoutThingsInput'];
  PlaceWhereInput: NexusGenInputs['PlaceWhereInput'];
  PlaceWhereUniqueInput: NexusGenInputs['PlaceWhereUniqueInput'];
  ThingCreateInput: NexusGenInputs['ThingCreateInput'];
  ThingCreateManyWithoutPlaceInput: NexusGenInputs['ThingCreateManyWithoutPlaceInput'];
  ThingCreateWithoutPlaceInput: NexusGenInputs['ThingCreateWithoutPlaceInput'];
  ThingScalarWhereInput: NexusGenInputs['ThingScalarWhereInput'];
  ThingUpdateInput: NexusGenInputs['ThingUpdateInput'];
  ThingUpdateManyDataInput: NexusGenInputs['ThingUpdateManyDataInput'];
  ThingUpdateManyMutationInput: NexusGenInputs['ThingUpdateManyMutationInput'];
  ThingUpdateManyWithWhereNestedInput: NexusGenInputs['ThingUpdateManyWithWhereNestedInput'];
  ThingUpdateManyWithoutPlaceInput: NexusGenInputs['ThingUpdateManyWithoutPlaceInput'];
  ThingUpdateWithWhereUniqueWithoutPlaceInput: NexusGenInputs['ThingUpdateWithWhereUniqueWithoutPlaceInput'];
  ThingUpdateWithoutPlaceDataInput: NexusGenInputs['ThingUpdateWithoutPlaceDataInput'];
  ThingUpsertWithWhereUniqueWithoutPlaceInput: NexusGenInputs['ThingUpsertWithWhereUniqueWithoutPlaceInput'];
  ThingWhereInput: NexusGenInputs['ThingWhereInput'];
  ThingWhereUniqueInput: NexusGenInputs['ThingWhereUniqueInput'];
  PlaceOrderByInput: NexusGenEnums['PlaceOrderByInput'];
  ThingOrderByInput: NexusGenEnums['ThingOrderByInput'];
}

export interface NexusGenFieldTypes {
  AggregatePlace: { // field return type
    count: number; // Int!
  }
  AggregateThing: { // field return type
    count: number; // Int!
  }
  BatchPayload: { // field return type
    count: any; // Long!
  }
  Mutation: { // field return type
    createPlace: NexusGenRootTypes['Place']; // Place!
    createThing: NexusGenRootTypes['Thing']; // Thing!
    deleteManyPlaces: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteManyThings: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deletePlace: NexusGenRootTypes['Place'] | null; // Place
    deleteThing: NexusGenRootTypes['Thing'] | null; // Thing
    updateManyPlaces: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateManyThings: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updatePlace: NexusGenRootTypes['Place'] | null; // Place
    updateThing: NexusGenRootTypes['Thing'] | null; // Thing
    upsertPlace: NexusGenRootTypes['Place']; // Place!
    upsertThing: NexusGenRootTypes['Thing']; // Thing!
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Place: { // field return type
    id: string; // ID!
    name: string; // String!
    things: NexusGenRootTypes['Thing'][] | null; // [Thing!]
  }
  PlaceConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregatePlace']; // AggregatePlace!
    edges: NexusGenRootTypes['PlaceEdge'][]; // [PlaceEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  PlaceEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Place']; // Place!
  }
  Query: { // field return type
    place: NexusGenRootTypes['Place'] | null; // Place
    places: NexusGenRootTypes['Place'][]; // [Place!]!
    placesConnection: NexusGenRootTypes['PlaceConnection']; // PlaceConnection!
    thing: NexusGenRootTypes['Thing'] | null; // Thing
    things: NexusGenRootTypes['Thing'][]; // [Thing!]!
    thingsConnection: NexusGenRootTypes['ThingConnection']; // ThingConnection!
  }
  Thing: { // field return type
    id: string; // ID!
    name: string; // String!
    place: NexusGenRootTypes['Place'] | null; // Place
  }
  ThingConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateThing']; // AggregateThing!
    edges: NexusGenRootTypes['ThingEdge'][]; // [ThingEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  ThingEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Thing']; // Thing!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createPlace: { // args
      data: NexusGenInputs['PlaceCreateInput']; // PlaceCreateInput!
    }
    createThing: { // args
      data: NexusGenInputs['ThingCreateInput']; // ThingCreateInput!
    }
    deleteManyPlaces: { // args
      where?: NexusGenInputs['PlaceWhereInput'] | null; // PlaceWhereInput
    }
    deleteManyThings: { // args
      where?: NexusGenInputs['ThingWhereInput'] | null; // ThingWhereInput
    }
    deletePlace: { // args
      where: NexusGenInputs['PlaceWhereUniqueInput']; // PlaceWhereUniqueInput!
    }
    deleteThing: { // args
      where: NexusGenInputs['ThingWhereUniqueInput']; // ThingWhereUniqueInput!
    }
    updateManyPlaces: { // args
      data: NexusGenInputs['PlaceUpdateManyMutationInput']; // PlaceUpdateManyMutationInput!
      where?: NexusGenInputs['PlaceWhereInput'] | null; // PlaceWhereInput
    }
    updateManyThings: { // args
      data: NexusGenInputs['ThingUpdateManyMutationInput']; // ThingUpdateManyMutationInput!
      where?: NexusGenInputs['ThingWhereInput'] | null; // ThingWhereInput
    }
    updatePlace: { // args
      data: NexusGenInputs['PlaceUpdateInput']; // PlaceUpdateInput!
      where: NexusGenInputs['PlaceWhereUniqueInput']; // PlaceWhereUniqueInput!
    }
    updateThing: { // args
      data: NexusGenInputs['ThingUpdateInput']; // ThingUpdateInput!
      where: NexusGenInputs['ThingWhereUniqueInput']; // ThingWhereUniqueInput!
    }
    upsertPlace: { // args
      create: NexusGenInputs['PlaceCreateInput']; // PlaceCreateInput!
      update: NexusGenInputs['PlaceUpdateInput']; // PlaceUpdateInput!
      where: NexusGenInputs['PlaceWhereUniqueInput']; // PlaceWhereUniqueInput!
    }
    upsertThing: { // args
      create: NexusGenInputs['ThingCreateInput']; // ThingCreateInput!
      update: NexusGenInputs['ThingUpdateInput']; // ThingUpdateInput!
      where: NexusGenInputs['ThingWhereUniqueInput']; // ThingWhereUniqueInput!
    }
  }
  Place: {
    things: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ThingOrderByInput'] | null; // ThingOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ThingWhereInput'] | null; // ThingWhereInput
    }
  }
  Query: {
    place: { // args
      where: NexusGenInputs['PlaceWhereUniqueInput']; // PlaceWhereUniqueInput!
    }
    places: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['PlaceOrderByInput'] | null; // PlaceOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['PlaceWhereInput'] | null; // PlaceWhereInput
    }
    placesConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['PlaceOrderByInput'] | null; // PlaceOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['PlaceWhereInput'] | null; // PlaceWhereInput
    }
    thing: { // args
      where: NexusGenInputs['ThingWhereUniqueInput']; // ThingWhereUniqueInput!
    }
    things: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ThingOrderByInput'] | null; // ThingOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ThingWhereInput'] | null; // ThingWhereInput
    }
    thingsConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['ThingOrderByInput'] | null; // ThingOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['ThingWhereInput'] | null; // ThingWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AggregatePlace" | "AggregateThing" | "BatchPayload" | "Mutation" | "PageInfo" | "Place" | "PlaceConnection" | "PlaceEdge" | "Query" | "Thing" | "ThingConnection" | "ThingEdge";

export type NexusGenInputNames = "PlaceCreateInput" | "PlaceCreateOneWithoutThingsInput" | "PlaceCreateWithoutThingsInput" | "PlaceUpdateInput" | "PlaceUpdateManyMutationInput" | "PlaceUpdateOneWithoutThingsInput" | "PlaceUpdateWithoutThingsDataInput" | "PlaceUpsertWithoutThingsInput" | "PlaceWhereInput" | "PlaceWhereUniqueInput" | "ThingCreateInput" | "ThingCreateManyWithoutPlaceInput" | "ThingCreateWithoutPlaceInput" | "ThingScalarWhereInput" | "ThingUpdateInput" | "ThingUpdateManyDataInput" | "ThingUpdateManyMutationInput" | "ThingUpdateManyWithWhereNestedInput" | "ThingUpdateManyWithoutPlaceInput" | "ThingUpdateWithWhereUniqueWithoutPlaceInput" | "ThingUpdateWithoutPlaceDataInput" | "ThingUpsertWithWhereUniqueWithoutPlaceInput" | "ThingWhereInput" | "ThingWhereUniqueInput";

export type NexusGenEnumNames = "PlaceOrderByInput" | "ThingOrderByInput";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "Long" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}