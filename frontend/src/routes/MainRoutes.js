import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import PrivateRoute from "./PrivateRoute";
import TermsAndCondition from "../components/termsAndCondition/TermsAndCondition";
import Profile from "../pages/Profile";
function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route
        path="/homepage"
        element={
          <PrivateRoute>
            <HomePage />
            <TermsAndCondition />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default MainRoutes;
