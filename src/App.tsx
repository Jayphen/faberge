import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import GlobalStyles from "./components/globals/Styles";

const App = () => (
  <>
    <GlobalStyles />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </>
);

export default App;
