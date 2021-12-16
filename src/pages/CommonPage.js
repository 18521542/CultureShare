import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

// layout for all common pages except login and register pages
function CommonPage() {
  return (
    <div className="container">
      <NavBar />
      <div style={{ marginTop: 80 }} className="layout-wapper">
        <Outlet/>
      </div>
    </div>
  );
}

export default CommonPage;
