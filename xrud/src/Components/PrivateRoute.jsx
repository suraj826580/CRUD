import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { isAuth } = useSelector((store) => {
    return store.authReducer;
  });

  const location = useLocation();
  return !isAuth ? (
    <Navigate to="/login" state={location.pathname} replace />
  ) : (
    children
  );
}
