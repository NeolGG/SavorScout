// AuthForm.js
import React from "react";
import "./Auth.css"; // Import the styles
const AuthForm = ({ user, isLogin, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} autoComplete="off" className="auth-container"> {/* Use the auth-container class */}
      {!isLogin && (
        <div>
          <div className="form-group">
            <label>First Name</label>
            <br />
            <input
              type="text"
              className="form-control"
              id="first-name-input"
              value={user.firstName}
              onChange={onChange}
              name="firstName"
              placeholder="First name"
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <br />
            <input
              type="text"
              className="form-control"
              id="last-name-input"
              value={user.lastName}
              onChange={onChange}
              name="lastName"
              placeholder="Last name"
              required
            />
          </div>
        </div>
      )}
      {/* Email input */}
      <div className="form-group">
        <label>Email</label>
        <br />
        <input
          type="email"
          className="form-control"
          id="email-input"
          value={user.email}
          onChange={onChange}
          name="email"
          required
        />
      </div>
      {/* Password input */}
      <div className="form-group">
        <label>Password</label>
        <br />
        <input
          type="password"
          className="form-control"
          id="password-input"
          value={user.password}
          onChange={onChange}
          name="password"
          min="0"
          required
        />
      </div>
      {!isLogin && (
        // Password confirmation input for sign-up form
        <div className="form-group">
          <label>Confirm Password</label>
          <br />
          <input
            type="password"
            className="form-control"
            id="password-confirm-input"
            value={user.passwordConfirm}
            onChange={onChange}
            name="passwordConfirm"
            min="0"
            required
          />
        </div>
      )}
      {/* Submit button */}
      <div className="form-group">
        <button type="submit" className="auth-button" onSubmit={onSubmit}>
          {isLogin ? "Login" : "Sign Up"} {/* Show "Login" or "Sign Up" based on isLogin prop */}
        </button>
      </div>
    </form>
  );
};
export default AuthForm;