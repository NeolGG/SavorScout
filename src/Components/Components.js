import React from "react";

//pages
import Friends from "./Friends/Friends";
import RestaurantRec from "./RestaurantRec/RestaurantRec";
import Dashboard from "./Dashboard/Dashboard";
import NewRatings from "./NewRatings/NewRatings";
import Verified from "./Verified/Verified";
import VerRatings from "./VerRatings/VerRatings";
import WriteRating from "./WriteRating/WriteRating";
import MyProfile from "./MyProfile/MyProfile";
import RestaurantProfile from "./RestaurantProfile/RestaurantProfile";
import UserProfile from "./UserProfile/UserProfile";

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
        <Route path="/restaurantrec" element={<ProtectedRoute component ={RestaurantRec} />}/>
        <Route path="/verifiedratings" element={<ProtectedRoute component ={VerRatings} />}/>
        <Route path="/writerating" element= {<ProtectedRoute component={WriteRating}/>}/>
        <Route path="/friends" element = {<ProtectedRoute component = {Friends}/>}/>
        <Route path="/restaurantprofile/:restaurantId" element={<ProtectedRoute component={RestaurantProfile} />}/>
        <Route path="/profile/:userId" element={<ProtectedRoute component={UserProfile} />}/>
        <Route path="/auth" element={<AuthModule />} /> 
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
    )
  }