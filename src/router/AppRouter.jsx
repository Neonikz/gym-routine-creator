import React from "react";
import { PublicRoutes } from "./Public/PublicRoutes";
import { PrivateRoutes } from "./Private/PrivateRoutes";
import { Route, Routes } from "react-router-dom";
import { Login, Register, Admin, Trainer, Client } from "../pages";

export const AppRouter = () => {
  return (
    <>
      {/* <PublicRoutes> */}
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* </PublicRoutes> */}

      {/* <PrivateRoutes> */}
      <Routes>
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Trainer" element={<Trainer />} />
        <Route path="/Client" element={<Client />} />
      </Routes>
      {/* </PrivateRoutes> */}
    </>
  );
};
