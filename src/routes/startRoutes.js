import { lazy } from "react";
const startRouts = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /*webpackChunkName:'HomePage'*/)
    ),
  },
  {
    name: "Movies",
    path: "/movies",
    exact: true,
    component: lazy(() =>
      import("../pages/MoviesPage" /*webpackChunkName:'MoviesPage'*/)
    ),
  },
];
export default startRouts;
