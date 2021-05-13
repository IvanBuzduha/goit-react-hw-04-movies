import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import startRouts from "../routes/startRoutes";
import Loader from "react-loader-spinner";
import Navigation from "./Navigation/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense
        fallback={
          <Loader
            type="Oval"
            color="#ffffff"
            height={50}
            width={50}
            className="  flex flex-wrap justify-center items-center/"
          />
        }
      >
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
