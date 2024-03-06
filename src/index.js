import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./lyouts/default";
import Auth from "./lyouts/auth";

import ErrorPage from "./views/error/error-page";
import Dashboard from "./views/dashboard/dashboard";
import Restaurants from "./views/restaurants/restaurants";
import Experiences from "./views/experiences/experiences";
import Tables from "./views/tables/tables";
import Team from "./views/team/tables";
import RestaurantGeneral from "./views/restaurants/restaurant-general";
import RestaurantMenu from "./views/restaurants/restaurant-menu";
import RestaurantPhotos from "./views/restaurants/restaurant-photos";
import RestaurantWorkingHours from "./views/restaurants/restaurant-working-hours";
import RestaurantAvis from "./views/restaurants/restaurant-avis";
import RestaurantSeo from "./views/restaurants/restaurant-seo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/r",
        element: <Restaurants />,
      },
      {
        path: "/r/:id",
        element: <RestaurantGeneral />,
      },
      {
        path: "/r/:id/menu",
        element: <RestaurantMenu />,
      },
      {
        path: "/r/:id/photos",
        element: <RestaurantPhotos />,
      },
      {
        path: "/r/:id/hours",
        element: <RestaurantWorkingHours />,
      },
      {
        path: "/r/:id/reviews",
        element: <RestaurantAvis />,
      },
      {
        path: "/r/:id/seo",
        element: <RestaurantSeo />,
      },

      // {
      //   path: "/r/:id/menu/:id",
      //   element: <h1>Item</h1>,
      // },
      {
        path: "/ex",
        element: <Experiences />,
      },
      {
        path: "/pt",
        element: <Tables />,
      },
      {
        path: "/eq",
        element: <Team />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/auth/login",
        element: <h1>login</h1>,
      },
      {
        path: "/auth/register",
        element: <h1>register</h1>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
