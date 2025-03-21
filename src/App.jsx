import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./page/Home"; 
import { ProfileDetail } from "./page/ProfileDetail"; 
import Posts from "./Components/Posts";
import Developers from "./Components/Developers";
import Register from "./page/Register";
import Login from "./page/Login";
import ProtectedRoute from "./router/ProtectedRoute";
import Dashboard from "./page/Dashboard";

function App() {
  return (
      <Routes>
         <Route path="/login" element={<Login />} />
         <Route element={<ProtectedRoute/>}> 
        <Route path="/" element={<Home />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/profile/:id" element={<ProfileDetail />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/register" element={<Register />} />

      </Routes>
  );
}

export default App;
