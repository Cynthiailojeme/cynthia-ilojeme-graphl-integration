import React from "react";
import 'antd/dist/antd.min.css';
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Indentification from "../pages/Indentification/Indentification";
import NotFound from "../pages/NotFound/NotFound";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/indentification" element={<Indentification />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};

export default AllRoutes;
