import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import PrivateRoute from "./PrivateRoute";
import TermsAndCondition from "../components/termsAndCondition/TermsAndCondition";
import Profile from "../pages/Profile";
function MainRoutes({ setAccepted, accepted }) {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route
        path="/homepage"
        element={
          <PrivateRoute>
            <HomePage />
            <TermsAndCondition accepted={accepted} setAccepted={setAccepted} />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile accepted={accepted} setAccepted={setAccepted} />
            <TermsAndCondition accepted={accepted} setAccepted={setAccepted} />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default MainRoutes;
