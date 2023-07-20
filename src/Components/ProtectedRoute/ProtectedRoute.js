import React from 'react';
import { Navigate } from 'react-router-dom';
import { checkUser } from '../../common/services/AuthService';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  console.log('component: ', Component);

  // Check if the user is authenticated
  if (checkUser()) {
    return <Component {...rest} />;
  } else {
    return <Navigate to="/auth" replace />;
  }
};

export default ProtectedRoute;
