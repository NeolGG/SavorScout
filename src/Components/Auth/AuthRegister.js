
import React, { useEffect, useState } from "react";
import { checkUser, createUser } from "../../common/services/AuthService";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // Import the styles
const AuthRegister = () => {
  const navigate = useNavigate();
  // State to store the new user's information
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  // State to track if the registration request should be sent
  const [add, setAdd] = useState(false);
  // Check if the user is already logged in
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);
  // Update newUser state when input values change
  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;
    setNewUser({
      ...newUser,
      [name]: newValue
    });
  };
  // Handle form submission
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setAdd(true);
  };
  // Perform user registration when newUser and add state change
  useEffect(() => {
    if (newUser && add) {
      createUser(newUser).then((userCreated) => {
        if (userCreated) {
          alert(
            `${userCreated.get("firstName")}, you successfully registered!`
          );
          navigate("/");
        }
        setAdd(false);
      });
    }
  }, [navigate, newUser, add]);
  return (
    <div className="auth-container"> {/* Use the auth-container class */}
      {/* Render the AuthForm component */}
      <AuthForm
        user={newUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};
export default AuthRegister;
