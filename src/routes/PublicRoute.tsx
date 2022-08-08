import React from "react";
import jwtDecode from "jwt-decode";
import { Navigate } from "react-router-dom";
import Storage from "../utils/storage";
import { JWTDecode } from "./PrivateRoute";

interface Props {
  children: JSX.Element;
}

const PublicRoute = ({ children }: Props) => {
  const token = Storage.get("user-token");
  const userInstorage = token && jwtDecode<JWTDecode>(token);

  // Check if a user is logged in
  return userInstorage ? <Navigate to="/" replace /> : children;
};

export default PublicRoute;