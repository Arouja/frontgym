import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
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
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

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
      {/* Page Header Start */}
      <div className="container-fluid page-header mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: 400 }}>
          <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Profile</h4>
          <div className="d-inline-flex">
            <p className="m-0 text-white">
              <Link className="text-white" to="/">Home</Link>
            </p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">Profile</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Profile Card Start */}
      <section className="contact-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          src={profile.profilePicture}
                          alt="avatar"
                          className="img-fluid rounded-circle mb-4"
                        />
                      </div>
                      <div className="col-md-8">
                        <h2 className="card-title mb-3">{profile.firstName} {profile.lastName}</h2>
                        <p className="card-text">{profile.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Profile Card End */}
 {/* Project Status Section */}
 <section style={{ backgroundColor: '#eee' }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                  <a href='#'>Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                  <a href="#">User</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol lg="4">
              {/* Your existing card code */}
            </MDBCol>
            <MDBCol lg="8">
              {/* Your existing progress bars code */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      {/* Project Status Section End */}
      <Footer />
    </>
  );
};

export default Profile;