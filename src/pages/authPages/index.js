import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

function AuthPage(props) {
  const { isLogin } = props;
  console.log(isLogin)
  return (
    <Routes>
      <Route exact path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
}

export default AuthPage;
