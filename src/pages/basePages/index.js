import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import BlogEdit from "../BlogEdit";

function BasePage() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="edit" element={<BlogEdit />} />
      </Routes>
    </div>
  );
}

export default BasePage;
