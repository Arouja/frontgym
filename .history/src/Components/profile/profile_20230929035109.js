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
import './profile'; // Import your CSS file for stylin

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
      <section className="profile-card">
        <MDBContainer className="py-5">
          <MDBRow className="justify-content-center">
            <MDBCol lg="6">
              <MDBCard>
                <MDBCardImage src="https://i.imgur.com/wvxPV9S.png" alt="Avatar" top />
                <MDBCardBody>
                  <MDBCardTitle>{profile.firstName} {profile.lastName}</MDBCardTitle>
                  <MDBCardText className="text-muted">@{profile.username}</MDBCardText>
                  <MDBCardText>{profile.bio}</MDBCardText>
                  <MDBCardText className="mb-2">Email: {profile.email}</MDBCardText>
                  <MDBCardText className="mb-4">Phone: {profile.phone}</MDBCardText>
                  <MDBBtn color="primary" className="me-2">
                    <MDBIcon far icon="edit" className="me-2" />
                    Edit Profile
                  </MDBBtn>
                  <MDBBtn color="secondary">
                    <MDBIcon icon="copy" className="me-2" />
                    Copy ID
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
