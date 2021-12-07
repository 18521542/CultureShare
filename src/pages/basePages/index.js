import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../authPages/LoginPage";
import Home from "../Home";
import BlogEdit from "../BlogEdit";
import NavBar from "../../components/NavBar/index";
//URL: localhost:{$port}/auth/{$authPageURL}

//$port: we can config.
//$authPageURLs are defined below.
function BasePage() {
  return (
    <div className="container">
      <NavBar />
      <div style={{marginTop: 80}}></div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="edit" element={<BlogEdit />} />
      </Routes>
    </div>
  );
}

export default BasePage;
