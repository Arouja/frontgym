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

  if (!isOpen || !userData) {
    return null; // Return null when modal is closed or user data is not available
  }

  return (
    <MDBContainer className="py-4" style={{ backgroundColor: 'rgba(24,29,43,255)' }} >
      <MDBRow>
        <MDBCol lg="8">
          <MDBCard className="mb-4">
            <MDBCardBody>
              {/* Your existing JSX code */}
            </MDBCardBody>
          </MDBCard>

          <MDBRow>
            <MDBCol md="6">
              <MDBCard className="mb-4 mb-md-0">
                <MDBCardBody>
                  {/* Your existing JSX code */}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol md="6">
              <MDBCard className="mb-4 mb-md-0">
                <MDBCardBody>
                  {/* Your existing JSX code */}
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
