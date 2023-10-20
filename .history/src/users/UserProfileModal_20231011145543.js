import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MDBContainer,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardText,
  MDBCardBody,
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

  if (!isOpen || !userData) {
    return null;
  }

  return (
    <MDBModal isOpen={isOpen} toggle={toggle}>
      <MDBModalHeader toggle={toggle}>User Profile</MDBModalHeader>
      <MDBModalBody>
        <MDBContainer>
          <MDBRow>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userData.firstName} {userData.lastName}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  {/* ... Other user details */}
                </MDBCardBody>
              </MDBCard>

              {/* ... Other content */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
};

export default UserProfileModal;
