// AuthLogin.js
import React, { useEffect, useState } from "react";
import { checkUser, loginUser } from "../../common/services/AuthService";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // Import the styles
const AuthLogin = () => {
  const navigate = useNavigate();
  // State to store the current user's email and password
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: ""
  });
  // State to track if the login request should be sent
  const [add, setAdd] = useState(false);
  // Check if the user is already logged in
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);
  // Update currentUser state when input values change
  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;
    setCurrentUser({
      ...currentUser,
      [name]: newValue
    });
  };
  // Handle form submission
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setAdd(true);
  };
  // Perform login when currentUser and add state change
  useEffect(() => {
    if (currentUser && add) {
      loginUser(currentUser).then((userLoggedIn) => {
        if (userLoggedIn) {
          alert(
            `${userLoggedIn.get("firstName")}, you successfully logged in!`
          );
          navigate("/");
        }
        setAdd(false);
      });
    }
  }, [navigate, currentUser, add]);
  return (
    <div className="auth-container"> {/* Use the auth-container class */}
      {/* Render the AuthForm component */}
      <AuthForm
        user={currentUser}
        isLogin={true}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};
export default AuthLogin;