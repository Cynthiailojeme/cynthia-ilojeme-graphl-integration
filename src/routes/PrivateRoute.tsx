import React from "react";
import jwtDecode from "jwt-decode";
import { Navigate } from "react-router-dom";
import Alert from "../utils/notification";
import { clearUserStorage } from "../utils/functions";
import Storage from "../utils/storage";
interface Props {
  children: JSX.Element;
}

export interface JWTDecode {
  identifier: string;
  iat: number;
  exp: number;
  aud: string;
  iss: string;
  sub: string;
}

const PrivateRoute = ({ children }: Props) => {
  const token = Storage.get("user-token");

  if (token) {
    const decodedToken = jwtDecode<JWTDecode>(token);

    if (decodedToken.exp * 1000 < Date.now()) {
      Alert("error", "Session Expired!", "Kindly sign in again");
      clearUserStorage();
    }
  }

  const userInstorage = token && jwtDecode<JWTDecode>(token);

  return userInstorage ? children : <Navigate to="/identification" replace />;
};

export default PrivateRoute;
