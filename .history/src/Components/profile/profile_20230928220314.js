import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      // Send a request to get the user's profile data using the token
      axios.get(`http://localhost:8089/api/v1/users/getuserbytoken/${token}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.error('Error fetching profile:', error);
      });
    }
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Welcome, {profile.firstName} {profile.lastName}</h2>
      <p>Email: {profile.email}</p>
      {/* Add more profile information as needed */}
    </div>
  );
};

export default Profile;
