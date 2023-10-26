import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./components/context/AuthContext";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8888/api";
axios.defaults.withCredentials = true;

const App = () => {
  console.log(useAuth()?.isLoggedIn);

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default App;
