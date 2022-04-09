import React from "react";
import CatalogMovies from "../pages/CatalogMovies";
import DetailMovies from "../pages/DetailMovies";
import HomeMovies from "../pages/HomeMovies";

import { Switch, Route, Link } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" component={CatalogMovies} />
      <Route path="/:category/:id" component={DetailMovies} />
      <Route path="/:category" component={CatalogMovies} />
      <Route path="/" component={HomeMovies} />
    </Switch>
  );
};

export default Routes;
