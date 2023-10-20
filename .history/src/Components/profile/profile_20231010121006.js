import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomNavbar from "../navbar/CustomNavbar";
import Sidebar from "../sidebar/Sidebar";
import About from '../about/About';
import Feature from '../feature/Feature'
import Classes from "../classes/Classes"
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

import Footer from "../footer/footer";
import Home from "../home/Home"

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,

  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [setSelectedImage] = useState(null);

  
        
  

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios.get(`http://localhost:8089/api/v1/users/getuserbytoken/${token}`)
        .then((response) => {
          setProfile(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching profile:', error);
        }); 
    }
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    

    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };
    reader.readAsDataURL(file);

    axios.post('http://localhost:8089/api/v1/upload-profile-image', formData)
      .then((response) => {
        const imageUrl = response.data.imageUrl;
        setProfile({ ...profile, profilePicture: imageUrl });
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

 
  return (
    <>
      <CustomNavbar profilePath={profile && profile.path} />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4 text-center">
            <label htmlFor="profileImage" className="position-relative">
              <MDBCardImage
                src={require('../../images/' + profile.path)}
                alt="avatar"
                className="rounded-circle border border-primary"
                style={{ width: '150px' }}
              />
              <input type="file" id="profileImage" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
              <MDBBtn className="btn-floating btn-sm btn-primary rounded-circle position-absolute bottom-0 end-0 m-2">
                <MDBIcon icon="camera" />
              </MDBBtn>
            </label>
            <h4 className="mt-3">{profile.firstName} {profile.lastName}</h4>
            <p className="text-muted">Bay Area, San Francisco, CA</p>
            <div className="d-flex justify-content-center">
              <MDBBtn color="primary" className="mx-1">Follow</MDBBtn>
              <MDBBtn outline color="primary" className="mx-1">Message</MDBBtn>
            </div>
          </div>

          <div className="col-md-8">
            {/* Profile Information */}
            <MDBCard className="mb-4">
              <MDBCardBody>
                <div className="row mb-4">
                  <div className="col-sm-3 fw-bold">Full Name</div>
                  <div className="col-sm-9">{profile.firstName} {profile.lastName}</div>
                </div>
                <hr />
                {/* Add more profile information sections */}
              </MDBCardBody>
            </MDBCard>

            {/* Project Status */}
            <div className="row">
              <div className="col-md-6">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <h6 className="mb-4"><MDBIcon fas icon="globe fa-lg text-warning me-1" />Project Status</h6>
                    <p className="mb-1">Web Design</p>
                    <MDBProgress>
                      <MDBProgressBar value={80} animated />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </div>
              {/* Add more project status cards */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;