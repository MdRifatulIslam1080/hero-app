import React from "react";

import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import AppDetails from "../pages/AppDetails/AppDetails";
import Installation from "../pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("appData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/appDetails/:id",
        Component: AppDetails,

        loader: async ({ params }) => {
          const response = await fetch("appData.json");
          const data = await response.json();
          return data;
        },
      },

      {
        path: "installation",
        loader: () => fetch("appData.json"),
        Component: Installation,
      },
    ],
  },
]);
