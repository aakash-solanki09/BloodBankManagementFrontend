// src/components/ProtectedRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  // Optional: Show a loading message while checking auth status
  if (loading) {
    return <div className="text-center py-10 text-lg font-semibold">Loading...</div>;
  }

  // If not authenticated, redirect to login
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
