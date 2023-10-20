import React from 'react';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-header">
        <h2>John Doe's Profile</h2>
      </div>
      <div className="profile-content">
        <div className="profile-avatar">
          <img src="avatar.jpg" alt="Avatar" />
        </div>
        <div className="profile-details">
          <h3>John Doe</h3>
          <p>Email: john.doe@example.com</p>
          <p>Membership Status: Premium</p>
          <p>Favorite Genres: Action, Thriller, Comedy</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
