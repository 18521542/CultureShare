import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LoginPage from "../pages/authPages/LoginPage";
import RegisterPage from "../pages/authPages/RegisterPage";
import UserPage from "../pages/userPages";
import Home from "../pages/Home";
import CommonPage from "../pages/CommonPage";

export const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth">
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>
        <Route path="/" element={<CommonPage />}>
          {/* put all pages that use common page layout here */}
          <Route exact path="/" element={<Home />} />
          <Route path="/user" element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
