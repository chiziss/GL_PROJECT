import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
  return (props) => {
    if (!localStorage.getItem('isLoggedIn')) {
      return <Navigate to='/log' />;
    }

    return <Component {...props} />;
  };
};

export default withAuth;