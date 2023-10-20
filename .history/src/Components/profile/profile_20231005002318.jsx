import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import About from '../about/About';
import Feature from '../feature/Feature'
import Classes from "../classes/Classes"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../footer/footer";
import Home from "../home/Home"
import { Link } from "react-router-dom";
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

const Profile = ({ profile }) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const reader = new FileReader();
    reader.onload = (e) => {
      // setSelectedImage(e.target.result); // Assuming setSelectedImage is not used
    };
    reader.readAsDataURL(file);

    axios.post('http://localhost:8089/api/v1/upload-profile-image', formData)
      .then((response) => {
        const imageUrl = response.data.imageUrl;
        // setProfile({ ...profile, profilePicture: imageUrl }); // Assuming setProfile is not used
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
      <div style={{ display: 'flex' }}>
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" exact render={() => <Profile profile={profile} />} />
            <Route path="/profile/classes" exact component={Classes} />
            <Route path="/profile/about" exact component={About} />
            <Route path="/profile/feature" exact component={Feature} />
          </Switch>
        </Router>
        <div style={{ display: 'flex' }}>
          <Navbar profilePath={profile && profile.path} />
          <div className="container-fluid page-header mb-5">
            {/* Rest of your code... */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
