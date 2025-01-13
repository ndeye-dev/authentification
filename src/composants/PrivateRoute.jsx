// src/composants/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ children }) {
  const token = useSelector((state) => state.user.token) || localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/LoginForm" />;
  }

  return children;
}

export default PrivateRoute;
