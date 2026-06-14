import React from "react";
import Home from "./pages/Home/Home";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <div className="app_container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
