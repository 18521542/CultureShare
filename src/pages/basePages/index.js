import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../authPages/LoginPage';
import Home from '../Home';

//URL: localhost:{$port}/auth/{$authPageURL}

//$port: we can config.
//$authPageURLs are defined below.
function BasePage() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/login" element={<LoginPage/>}/> */}
      </Routes>
    </div>
  );
}

export default BasePage;
