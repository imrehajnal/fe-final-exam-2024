import React from "react";
import ReactDOM from "react-dom/client";
import { initFakeApi } from "./mirage.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import RoomDetails from "./Pages/RoomDetails.jsx";

import "./index.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details/:id",
    element: <RoomDetails />,
  },
]);

// don't touch this line
initFakeApi();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
