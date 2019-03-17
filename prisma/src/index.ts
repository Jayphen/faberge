import * as path from "path";
import { GraphQLServer } from "graphql-yoga";
import { makePrismaSchema, prismaObjectType } from "nexus-prisma";
import { prisma } from "./generated/prisma-client";
import datamodelInfo from "./generated/nexus-prisma";

// How can I add a depth limit to Place
const Place = prismaObjectType({
  name: "Place",
  definition(t) {
    t.prismaFields(["*"]);
    t.boolean("hasSubplaces", {
      resolve: async ({ id }, _, ctx) => {
        const subPlaces = await ctx.prisma.place({ id }).subPlaces();

        return subPlaces && subPlaces.length > 0;
      },
    });
  },
});
const Query = prismaObjectType({
  name: "Query",
  definition(t) {
    t.prismaFields(["*"]);
  },
});
const Mutation = prismaObjectType({
  name: "Mutation",
  definition(t) {
    t.prismaFields(["*"]);
  },
});

const schema = makePrismaSchema({
  types: [Query, Mutation, Place],

  prisma: {
    datamodelInfo,
    client: prisma,
  },

  outputs: {
    schema: path.join(__dirname, "./generated/schema.graphql"),
    typegen: path.join(__dirname, "./generated/nexus.ts"),
  },
});

const server = new GraphQLServer({
  schema,
  context: { prisma },
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
