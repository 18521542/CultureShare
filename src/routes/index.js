import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import AuthPage from '../pages/authPages';
import BasePage from '../pages/basePages';
import UserPage from '../pages/userPages';

export const RootRoute = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        {/*auth route*/}
        <Route path="/auth/*" element={<AuthPage />} />

        {/*base root*/}
        <Route path="/" element={<BasePage />} />

        {/*user root*/}
        <Route path="/user/*" element={<UserPage />} />
        {/* <Route element={<h3>Nothing here!</h3>} /> */}
      </Routes>
    </BrowserRouter>
  );
};