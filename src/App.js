import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasePage from "./pages/basePages";
import AuthPage from "./pages/authPages";

function App() {

  return (
    <div className="App vh-100">
      <BrowserRouter>
        <Routes>
          <Route path="/auth/*" element={<AuthPage />} />
          <Route path="/*" element={<BasePage />} />
          <Route element={<h3>Nothing here!</h3>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
