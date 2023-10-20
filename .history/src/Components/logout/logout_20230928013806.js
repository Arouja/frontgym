import React from 'react';
import { connect } from 'react-redux';
import { logout } from './actions';

const Logout = ({ logout }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default connect(null, { logout })(Logout);
