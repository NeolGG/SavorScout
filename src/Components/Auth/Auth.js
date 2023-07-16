import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../../common/services/AuthService";

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
      <div>
        {/* Link to the registration page */}
        <Link to="/auth/register">
          <button>Register</button>
        </Link>
        <br />
        <br />
        {/* Link to the login page */}
        <Link to="/auth/login">
          <button>Login</button>
        </Link>
      </div>
    );
};

export default AuthModule;
