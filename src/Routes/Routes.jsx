import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import AppDetails from "../pages/AppDetails/AppDetails";
import Installation from "../pages/Installation/Installation";

// FIX: Common Loader Function jeta data-ke JSON-e convert kore
const appDataLoader = async () => {
  const response = await fetch("/appData.json");
  if (!response.ok) {
    // Error handling for fetch failure
    throw new Error("Could not fetch app data!");
  }
  return response.json();
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: appDataLoader, // Home route data loader
        path: "/",
        Component: Home,
      },
      {
        path: "/apps", // Apps-e jodi shob data dorkar hoy, loader use korun. Installation-e dorkar hobe tai Apps-e o use kora thik.
        loader: appDataLoader,
        Component: Apps,
      },
      {
        path: "/appDetails/:id",
        Component: AppDetails,
        loader: appDataLoader, // AppDetails data loader
      },
      {
        path: "installation",
        loader: appDataLoader, // Installation data loader
        Component: Installation,
      },
    ],
  },
]);
