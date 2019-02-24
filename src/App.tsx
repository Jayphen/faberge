import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import GlobalStyles from "./components/globals/Styles";
import Places from "./components/Places";
import Things from "./components/Things";

const App = () => (
  <>
    <GlobalStyles />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/places" component={Places} />
      <Route exact path="/things" component={Things} />
    </Switch>
  </>
);

export default App;
