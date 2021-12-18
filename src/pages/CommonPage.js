import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// layout for all common pages except login and register pages
function CommonPage() {
  return (
    <div className="container">
      <NavBar />
      <div style={{ marginTop: 90 }} className="layout-wapper mb-4">
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
}

export default CommonPage;
