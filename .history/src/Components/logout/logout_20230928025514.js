import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

const Logout = ({ logout }) => {
  useEffect(() => {
    logout();
  }, [logout]);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
};

export default connect(null, { logout })(Logout);