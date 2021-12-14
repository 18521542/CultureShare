import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../authPages/LoginPage";
import Home from "../Home";
import BlogEdit from "../BlogEdit";
import NavBar from "../../components/NavBar/index";

function BasePage() {
  return (
    <div className="container">
      <NavBar />
      <div style={{marginTop: 80}}></div>
    </div>
  );
}

export default BasePage;
