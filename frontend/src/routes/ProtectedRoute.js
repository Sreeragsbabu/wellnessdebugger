import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // If token not found → redirect to login
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // If token exists → load the page
  return children;
}
