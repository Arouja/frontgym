import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; // Make sure to install 'reactstrap' if you haven't already

const UserProfileModal = ({ isOpen, toggle, user }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>User Profile</ModalHeader>
      <ModalBody>
        {/* Display user profile information here */}
        <div>
          <strong>First Name:</strong> {user.firstName}
        </div>
        <div>
          <strong>Last Name:</strong> {user.lastName}
        </div>
        <div>
          <strong>Email:</strong> {user.email}
        </div>
        {/* Add more fields as needed */}
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-secondary" onClick={toggle}>Close</button>
      </ModalFooter>
    </Modal>
  );
};

export default UserProfileModal;
