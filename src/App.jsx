import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./page/Home"; // Asosiy sahifa
import { ProfileDetail } from "./page/ProfileDetail"; // Profil detali
import './App.css'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<ProfileDetail />} />
      </Routes>
  );
}

export default App;
