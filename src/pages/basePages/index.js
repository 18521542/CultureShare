import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";

function BasePage() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default BasePage;
