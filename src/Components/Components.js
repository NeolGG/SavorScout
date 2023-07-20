import React from "react";

//pages
import Friends from "./Friends/Friends";
import RestaurantRec from "./RestaurantRec/RestaurantRec";
import Dashboard from "./Dashboard/Dashboard";
import NewRatings from "./NewRatings/NewRatings";
import Verified from "./Verified/Verified";
import VerRatings from "./VerRatings/VerRatings";

import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import AuthModule from "./Auth/Auth";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

export default function Components() {
    return (
      <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute path="/" component={Dashboard} />} />
        <Route path="/newratings" element={<ProtectedRoute component={NewRatings} />} />
        <Route path="/verifiedusers" element={<ProtectedRoute component={Verified} />} />
        <Route path="/auth" element={<AuthModule />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>

  //     <Router>
  //       <Routes>
  //         <Route
  //           path="/"
  //           element={<ProtectedRoute path="/" element={Dashboard} />}
  //         /> 
  
  //         <Route
  //           path="/friends"
  //           element={<ProtectedRoute path="/friends" element={Friends} />}
  //         />
  //         <Route
  //           path="/restaurantrecs"
  //           element={<ProtectedRoute path="/restuarantrecs" element={RestaurantRec} />}
  //         />
  //         <Route
  //           path="/newratings"
  //           element={<ProtectedRoute path="/newratings" element={NewRatings} />}
  //         />
  //         <Route
  //           path="/verified"
  //           element={<ProtectedRoute path="/verified" element={Verified} />}
  //         />
  //         <Route
  //           path="/verifiedratings"
  //           element={<ProtectedRoute path="/verifiedratings" element={VerRatings} />}
  //         />
  
  //         <Route path="/auth" element={<AuthModule />} /> 
  //         <Route path="/auth/register" element={<AuthRegister />} />
  //         <Route path="/auth/login" element={<AuthLogin />} />
  
  
  //         <Route path="*" element={<Navigate to="/auth" replace />} />
  //       </Routes>
  //     </Router>
    )
  }