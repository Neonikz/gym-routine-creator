import { createBrowserRouter } from "react-router-dom";
import { Login } from "../../pages/Login/Login";
import { AppRouter } from "../AppRouter";
import { ErrorBoundary } from "../ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRouter />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
