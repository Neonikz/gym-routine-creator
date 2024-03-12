import React from "react";
import { Dashboard } from "../../../pages/Admin/Dashboard/Dashboard";

export const AdminRoute = () => {
  return [
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/ejercicios",
      element: <Login />,
    },
    {
      path: "/ejercicios/crear",
      element: <Login />,
    },
  ];
};
