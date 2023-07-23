// Auth.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../../common/services/AuthService";
import "./Auth.css"; // Import the styles
const AuthModule = () => {
  const navigate = useNavigate();
  // Check if the user is already logged in
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);
  return (
    <div className="auth-container">
      <h1 className="auth-heading">Welcome to Savor Scout</h1>
      <p className="auth-description">
        Explore a world of delicious foods and connect with food lovers around the globe!
      </p>
      <div className="auth-buttons">
        {/* Link to the registration page */}
        <Link to="/auth/register">
          <button className="auth-button">Get Started</button>
        </Link>
        <br />
        <br />
        {/* Link to the login page */}
        <Link to="/auth/login">
          <button className="auth-button">Login</button>
        </Link>
      </div>
    </div>
  );
};
export default AuthModule;