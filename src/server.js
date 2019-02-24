import App from "./App";
import React from "react";
import { StaticRouter } from "react-router-dom";
import express from "express";
import { renderToString } from "react-dom/server";

import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { fetch } from "apollo-env";
import { ApolloProvider, getMarkupFromTree } from "react-apollo-hooks";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", async (req, res) => {
    const cache = new InMemoryCache();

    const link = createHttpLink({
      uri: "http://localhost:8080/v1alpha1/graphql",
      fetch,
    });

    const client = new ApolloClient({
      ssrMode: true,
      cache,
      link,
    });

    const context = {};
    const start = Date.now();
    const renderedHtml = await getMarkupFromTree({
      renderFunction: renderToString,
      tree: (
        <ApolloProvider client={client}>
          <StaticRouter context={context} location={req.url}>
            <App />
          </StaticRouter>
        </ApolloProvider>
      ),
    });
    console.log("server rendering took", Date.now() - start, "ms");

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ""
        }
        ${
          process.env.NODE_ENV === "production"
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
    </head>
    <body>
        <div id="root">${renderedHtml}</div>
        <script>
          window.__APOLLO_STATE__=${JSON.stringify(client.extract())};
        </script>
    </body>
</html>`,
      );
    }
  });

export default server;
