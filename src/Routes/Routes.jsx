import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import AppDetails from "../pages/AppDetails/AppDetails";
import Installation from "../pages/Installation/Installation";

const appDataLoader = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const response = await fetch("/appData.json");
  if (!response.ok) {
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
        loader: appDataLoader,
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        loader: appDataLoader,
        Component: Apps,
        hydrateFallbackElement: (
          <div className="text-7xl text-black h-screen flex justify-center items-center">
            Loading.......
          </div>
        ),
      },
      {
        path: "/appDetails/:id",
        Component: AppDetails,
        loader: appDataLoader,
      },
      {
        path: "installation",
        loader: appDataLoader,
        Component: Installation,
      },
    ],
  },
]);
