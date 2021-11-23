import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import BasePage from "./pages/basePages";
// import AuthPage from "./pages/authPages";
import { RootRoute } from './routes';

//root URL
function App() {
  return <div className="App">{<RootRoute />}</div>;
}

export default App;
