import React from "react";
import { Navigate } from "react-router-dom";
import Alert from "../utils/notification";
import { clearUserStorage } from "../utils/actions";
import Storage from "../utils/storage";

export interface Props {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: Props) => {
  var jwt_decode = require("jwt-decode");

  const token = Storage.get("user-token");

  if (token) {
    const decodedToken = token && jwt_decode(token);

    if (decodedToken.exp * 1000 < Date.now()) {
      Alert("error", "Session Expired!", "Kindly sign in again");
      clearUserStorage();
    }
  }

  const userInstorage = token && jwt_decode(token);

  return userInstorage ? children : <Navigate to="/sign-in" replace />;
};

export default PrivateRoute;
