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
          <div className="col-lg-4">
            {/* Profile Card */}
            {/* Include profile picture, name, location, follow/message buttons */}
          </div>
          <div className="col-lg-8">
            {/* Profile Information */}
            {/* Display full name, email, phone, mobile, address */}
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            {/* Project Status Card 1 */}
            {/* Display project status information with progress bar */}
          </div>
          <div className="col-md-6">
            {/* Project Status Card 2 */}
            {/* Display project status information with progress bar */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;