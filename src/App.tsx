import React from "react";
import { Route, Switch } from "react-router-dom";
import GlobalStyles from "./components/globals/Styles";
import Place from "./components/Place";
import Places from "./components/Places";
import Things from "./components/Things";
import Home from "./Home";
import Header from "./components/Header";

const App = () => (
  <>
    <GlobalStyles />
    <Header />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/places" component={Places} />
      <Route path="/place/:placeId" component={Place} />
      <Route exact path="/things" component={Things} />
    </Switch>
  </>
);

export default App;
