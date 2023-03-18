import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Pages/Admin";
import EditProduct from "../Pages/EditProduct";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import SingleProduct from "../Pages/SingleProduct";
import PrivateRoute from "./PrivateRoute";

export default function MainRoutes() {
  return (
    <Routes>
      {" "}
      <Route path="/" element={<HomePage />} /> (Product List will be displayed
      here)
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />{" "}
      (For adding products to DB)
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route
        path="/products/:id/edit"
        element={
          <PrivateRoute>
            <EditProduct />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
}
