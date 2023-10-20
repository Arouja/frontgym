import React from 'react';
import { connect } from 'react-redux';

const Profile = ({ user }) => {
  if (!user) {
    return <div>Loading...</div>; // You might want to show a loader while data is being fetched
  }

  const { firstName, lastName, email } = user;

  return (
    <div className="profile">
      <h2>{`${firstName} ${lastName}`}</h2>
      <p>Email: {email}</p>
      {/* Add more user details as needed */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user, // Assuming that you have a user object in your Redux state
});

//export default connect(mapStateToProps)(Profile);
export default Profile;