import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import './profile'; // Make sure the path is correct

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
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
    <>
      <Navbar />
      <section className="vh-100" style={{ backgroundColor: '#eee' }}>
        <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
          <div class="card p-4">
            <div class=" image d-flex flex-column justify-content-center align-items-center">
              <button class="btn btn-secondary">
                <img src="/home/naoufel/Documents/profile.jpeg" alt = "profile image" height="100" width="100" />
              </button>
              <span class="name mt-3">{profile.firstName} {profile.lastName}</span>
              <span class="idd">@{profile.username}</span>
              <div class="d-flex flex-row justify-content-center align-items-center gap-2">
                <span class="idd1">{profile.id}</span>
                <span><i class="fa fa-copy"></i></span>
              </div>
              <div class="d-flex flex-row justify-content-center align-items-center mt-3">
                <span class="number">{profile.followers} <span class="follow">Followers</span></span>
              </div>
              <div class=" d-flex mt-2">
                <button class="btn1 btn-dark">Edit Profile</button>
              </div>
              <div class="text mt-3">
                <span>{profile.bio}</span>
              </div>
              <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                <span><i class="fa fa-twitter"></i></span>
                <span><i class="fa fa-facebook-f"></i></span>
                <span><i class="fa fa-instagram"></i></span>
                <span><i class="fa fa-linkedin"></i></span>
              </div>
              <div class=" px-2 rounded mt-4 date ">
                <span class="join">Joined {profile.joinDate}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
