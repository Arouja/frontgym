import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
const UserProfileModal = ({ userId, isOpen, toggle }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (isOpen && userId) {
      axios.get(`http://localhost:8089/api/v1/users/getuserbyid/${userId}`)
        .then(response => {
          setUserData(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [isOpen, userId]);

  return (
    <MDBContainer className="py-4" style={{ backgroundColor: 'rgba(24,29,43,255)'}} >
    <MDBRow>
      <MDBCol lg="4">
        <MDBCard className="mb-4">
          <MDBCardBody className="text-center">
            <label htmlFor="profileImage" className="position-relative">
            <MDBCardImage
            src={require (  '../../images/'+profile.path) }
            alt="avatar"
            className="rounded-circle"
            style={{ width: '150px' }}
            />
              <input type="file" id="profileImage" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
              <MDBBtn className="btn-floating btn-sm btn-primary rounded-circle position-absolute bottom-0 end-0 m-2">
                <MDBIcon icon="camera" />
              </MDBBtn>
            </label>
            <p className="text-muted mb-1">{profile.firstName} {profile.lastName}</p>
            <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
            <div className="d-flex justify-content-center mb-2">
              <MDBBtn>Follow</MDBBtn>
              <MDBBtn outline className="ms-1">Message</MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="mb-4 mb-lg-0">
          <MDBCardBody className="p-0">
            <MDBListGroup flush className="rounded-3">
              <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                <MDBIcon fas icon="globe fa-lg text-warning" />
                <MDBCardText>https://mdbootstrap.com</MDBCardText>
              </MDBListGroupItem>
              
              {/* Add more list items as needed */}
            </MDBListGroup>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol lg="8">
        <MDBCard className="mb-4">
          <MDBCardBody>
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Full Name</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">{profile.firstName} {profile.lastName}</MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Email</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">{profile.username}</MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Phone</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">{profile.path}</MDBCardText>               
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Mobile</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Address</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>

        <MDBRow>
          <MDBCol md="6">
            <MDBCard className="mb-4 mb-md-0">
              <MDBCardBody>
                <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assignment</span> Project Status</MDBCardText>
                <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                <MDBProgress className="rounded">
                  <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                </MDBProgress>
                {/* Add more project status items as needed */}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="6">
            <MDBCard className="mb-4 mb-md-0">
              <MDBCardBody>
                <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assignment</span> Project Status</MDBCardText>
                <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                <MDBProgress className="rounded">
                  <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                </MDBProgress>
                {/* Add more project status items as needed */}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  );
};

export default UserProfileModal;
