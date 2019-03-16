declare module "apollo-env" {
  export function fetch(
    input: RequestInfo,
    init?: RequestInit,
  ): Promise<Response>;
}
declare module "*.gql" {
  import { DocumentNode } from "graphql";

  const value: DocumentNode;
  export = value;
}
