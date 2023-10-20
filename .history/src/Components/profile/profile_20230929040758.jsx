import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import './profile.css'; // Import your CSS file for styling

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
      <div className="container mt-4 mb-4 p-3">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src={profile.profilePicture} alt="Avatar" />
              </div>
              <div className="team-content">
                <h3 className="name">{profile.firstName} {profile.lastName}</h3>
                <h4 className="title">{profile.role}</h4>
              </div>
              <ul className="social">
                <li><a href={profile.facebook} className="fa fa-facebook" aria-hidden="true"></a></li>
                <li><a href={profile.twitter} className="fa fa-twitter" aria-hidden="true"></a></li>
                <li><a href={profile.googlePlus} className="fa fa-google-plus" aria-hidden="true"></a></li>
                <li><a href={profile.linkedin} className="fa fa-linkedin" aria-hidden="true"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
