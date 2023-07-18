import React from "react";

//pages
import Friends from "./Friends/Friends";
import RestaurantRec from "./RestaurantRec/RestaurantRec";
import Dashboard from "./Dashboard/Dashboard";
import Ratings from "./Ratings/Ratings";

import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import AuthModule from "./Auth/Auth";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

export default function Components() {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={<ProtectedRoute path="/" element={Dashboard} />}
          /> 
  
          <Route
            path="/friends"
            element={<ProtectedRoute path="/friends" element={Friends} />}
          />
          <Route
            path="/communities"
            element={<ProtectedRoute path="/restuarantrecs" element={RestaurantRec} />}
          />
          <Route
            path="/ratings"
            element={<ProtectedRoute path="/ratings" element={Ratings} />}
          />
  
          <Route path="/auth" element={<AuthModule />} /> 
          <Route path="/auth/register" element={<AuthRegister />} />
          <Route path="/auth/login" element={<AuthLogin />} />
  
  
          <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
      </Router>
    )
  }