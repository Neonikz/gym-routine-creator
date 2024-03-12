import React from "react";
import styles from "./styles/styles.module.css";
import { useRouteError } from "react-router-dom";

export const ErrorBoundary = () => {
  const error = useRouteError();
  return (
    <div className={styles.container}>
      <p>
        Oops <br />
        ¡Hubo un error!
      </p>
      <span>Error: {error.statusText || error.message}</span>
    </div>
  );
};
