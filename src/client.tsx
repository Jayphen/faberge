import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { hydrate } from "react-dom";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { fetch } from "apollo-env";
import { ApolloProvider } from "react-apollo-hooks";

const cache = new InMemoryCache();

const link = createHttpLink({
  uri: "http://localhost:8080/v1alpha1/graphql",
  fetch,
});

const client = new ApolloClient({
  cache: cache.restore((window as any).__APOLLO_STATE__),
  link,
});

hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,

  document.querySelector("#root"),
);

if (module.hot) {
  module.hot.accept();
}
