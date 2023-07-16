import React from "react";

const AuthForm = ({ user, isLogin, onChange, onSubmit }) => {

  return (
    <form onSubmit={onSubmit} autoComplete="off">
      {/* Conditionally render first name and last name inputs if not in login mode */}
      {!isLogin ? (
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
              placeholder="first name"
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
              required
            />
          </div>
        </div>
      ) : (
        <></>
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

      {/* Submit button */}
      <div className="form-group">
        <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
