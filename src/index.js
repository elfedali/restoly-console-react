import React from "react";
import ReactDOM from "react-dom/client";

import "./App.scss";

import reportWebVitals from "./reportWebVitals";

import App from "./App";

import { BrowserRouter } from "react-router-dom";
import AuthStack from "./navigation/AuthStack";
import AppStack from "./navigation/AppStack";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Dashboard />,
//       },
//       {
//         path: "/r/",
//         element: <Restaurants />,
//       },
//       {
//         path: "/r/:id",
//         element: <RestaurantsBase />,
//         children: [
//           {
//             path: "/r/:id",
//             element: <RestaurantGeneral />,
//           },
//           {
//             path: "/r/:id/menu",
//             element: <RestaurantMenu />,
//           },
//           {
//             path: "/r/:id/photos",
//             element: <RestaurantPhotos />,
//           },
//           {
//             path: "/r/:id/hours",
//             element: <RestaurantWorkingHours />,
//           },
//           {
//             path: "/r/:id/reviews",
//             element: <RestaurantAvis />,
//           },
//           {
//             path: "/r/:id/seo",
//             element: <RestaurantSeo />,
//           },
//         ],
//       },

//       // {
//       //   path: "/r/:id/menu/:id",
//       //   element: <h1>Item</h1>,
//       // },
//       {
//         path: "/ex",
//         element: <Experiences />,
//       },
//       {
//         path: "/pt",
//         element: <Tables />,
//       },
//       {
//         path: "/eq",
//         element: <Team />,
//       },
//     ],
//   },
//   {
//     path: "/auth/",
//     element: <Auth />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/auth/",
//         element: <Login />,
//       },
//       {
//         path: "/auth/login",
//         element: <Login />,
//       },
//       {
//         path: "/auth/register",
//         element: <Register />,
//       },
//     ],
//   },
// ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
