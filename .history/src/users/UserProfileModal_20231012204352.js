// Import the necessary components from Reactstrap
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState, useEffect } from 'react';
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
    return null;
  }

  return (
    <div class="text-center" style={{ width: '50px' }}>
    
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <div className="icon-box">
          <MDBCardImage
                  src={require (  '../images/'+userData.path) }
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '50px' }}
                  />
          </div>
          User Profile
        </ModalHeader>
        <ModalBody>
          {/* Render user profile data here */}
          <MDBContainer fluid>
          <MDBRow>
            <MDBCol md="12">
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
          {/* Add more user details as needed */}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default UserProfileModal;
