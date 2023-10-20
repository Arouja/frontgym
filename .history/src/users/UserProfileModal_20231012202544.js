// Import the necessary components from Reactstrap
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div class="text-center">
      <h2>User Profile</h2>
      <Button color="primary" onClick={toggle}>Close</Button>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <div className="icon-box">
            <i className={`fa red-circle fa-user`}></i>
          </div>
          User Profile
        </ModalHeader>
        <ModalBody>
          {/* Render user profile data here */}
          Full Name: {userData.firstName} {userData.lastName}<br />
          Email: {userData.username}<br />
          {/* Add more user details as needed */}
        </ModalBody>
        
      </Modal>
    </div>
  );
};

export default UserProfileModal;
