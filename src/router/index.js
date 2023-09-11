import React from "react";
import { Navigate } from "react-router-dom";
const Home = React.lazy(() => import("@/views/home"));
const Entire = React.lazy(() => import("@/views/entire"));
const Details = React.lazy(() => import("@/views/details"));
const Notfound = React.lazy(() => import("@/views/notfound"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
    // element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/entire",
    element: <Entire />,
  },
  {
    path: "/details",
    element: <Details />,
  },
  {},
  {
    path: "*",
    element: <Notfound />,
  },
];
export default routes;
