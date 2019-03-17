import { GraphQLServer } from "graphql-yoga";
import { makePrismaSchema, prismaObjectType } from "nexus-prisma";
import { idArg, stringArg } from "nexus/dist";
import * as path from "path";
import datamodelInfo from "./generated/nexus-prisma";
import { prisma } from "./generated/prisma-client";

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
    t.prismaFields(["place", "thing", "things"]);

    t.list.field("places", {
      type: "Place",
      resolve: (_, __, ctx) => {
        return ctx.prisma.places({ where: { depth: 0 } });
      },
    });
  },
});
const Mutation = prismaObjectType({
  name: "Mutation",
  definition(t) {
    t.prismaFields(["*"]);

    t.field("createPlace", {
      type: "Place",
      args: {
        name: stringArg({ required: true }),
      },
      resolve: (_, { name }, ctx) => {
        return ctx.prisma.createPlace({
          depth: 0,
          name,
        });
      },
    });

    t.field("createSubplace", {
      type: "Place",
      args: {
        name: stringArg({ required: true }),
        parentId: idArg({ required: true }),
      },
      resolve: async (_, { name, parentId }, ctx) => {
        const parentDepth = await ctx.prisma.place({ id: parentId }).depth();

        return ctx.prisma.createPlace({
          parentPlace: { connect: { id: parentId } },
          depth: parentDepth + 1,
          name,
        });
      },
    });
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

  // Configure nullability of input arguments: All arguments are non-nullable by default
  nonNullDefaults: {
    input: false,
    output: false,
  },

  // Configure automatic type resolution for the TS representations of the associated types
  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, "./types.ts"),
        alias: "types",
      },
    ],
    contextType: "types.Context",
  },
});

const server = new GraphQLServer({
  schema,
  context: { prisma },
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
