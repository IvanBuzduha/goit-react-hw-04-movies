import { lazy } from "react";

const castReviewRoutes = [
  {
    name: "Cast",
    path: "/cast",
    exact: true,
    component: lazy(() =>
      import("../Components/Cast/Cast" /*webpackChunkName:'Cast'*/)
    ),
  },
  {
    name: "Reviews",
    path: "/reviews",
    exact: true,
    component: lazy(() =>
      import("../Components/Reviews/Reviews" /*webpackChunkName:'Reviews'*/)
    ),
  },
];

export default castReviewRoutes;
