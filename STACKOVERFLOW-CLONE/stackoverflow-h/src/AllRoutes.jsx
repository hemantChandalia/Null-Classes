import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Home/Auth/Auth";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Define your routes */}
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />

      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AllRoutes;
