import React from "react";
import { ErrorBoundary } from "./router/Errors/ErrorBoundary";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    // <AppProvider>
    <AppRouter />
    // </AppProvider>
  );
};
