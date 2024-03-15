import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Admin, Client, Login, Register, Trainer } from "../pages/index";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/*" element={<Navigate to="/about" />} />

        <Route path="/Admin" element={<Admin />} />
        <Route path="/Trainer" element={<Trainer />} />
        <Route path="/Client" element={<Client />} />
        <Route />
      </Routes>
    </>
  );
};
