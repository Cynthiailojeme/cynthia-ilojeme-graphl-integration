import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Indentification from "../pages/Indentification/Indentification";
import SignIn from "../pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/indentification" element={<Indentification />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </React.Fragment>
  );
};

export default AllRoutes;
