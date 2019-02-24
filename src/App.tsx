import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import GlobalStyles from "./components/globals/Styles";
import { ApolloProvider } from "react-apollo-hooks";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { fetch } from "apollo-env";

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

const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </ApolloProvider>
);

export default App;
