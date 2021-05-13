import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import startRouts from "../routes/startRoutes";
// import MovieDetails from "./MovieDetails/MovieDetails";
import Navigation from "./Navigation/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          {startRouts.map((item) => (
            <Route
              path={item.path}
              exact={item.exact}
              component={item.component}
              key={item.path}
            />
          ))}
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
