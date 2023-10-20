import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomNavbar from "../Components/navbar/CustomNavbar";
import "./users"
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Table from 'react-bootstrap/Table';
import UserProfileModal from './UserProfileModal';
import Footer from "../Components/footer/footer";
import DeleteModal from './DeleteModal'; // Import your DeleteModal component

import {
  MDBContainer,
} from 'mdb-react-ui-kit';
const [profileModalOpen, setProfileModalOpen] = useState(false);
const [selectedUserIdForProfile, setSelectedUserIdForProfile] = useState(null);

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleOpenProfileModal = (userId) => {
    setSelectedUserIdForProfile(userId);
    setProfileModalOpen(true);
  };
  
  const handleCloseProfileModal = () => {
    setSelectedUserIdForProfile(null);
    setProfileModalOpen(false);
  };
  

  const handleOpenDeleteModal = (userId) => {
    setSelectedUserId(userId);
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedUserId(null);
    setDeleteModalOpen(false);
  };

  const handleConfirmDelete = () => {
    axios.delete(`http://localhost:8089/api/v1/users/delete/${selectedUserId}`)
      .then(response => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== selectedUserId));
        console.log('User deleted successfully');
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });

    handleCloseDeleteModal();
  };

  useEffect(() => {
    fetch('http://localhost:8089/api/v1/users/all-users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredUsers = users.filter(user =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div style={{ display: 'flex' }}> 
        <CustomNavbar profilePath={users && users.path} />
        <div className="container-fluid page-header mb-5">

          <section style= {{ backgroundColor: 'rgba(19,23,34,255)' }} >
            <div className="container-fluid page-header mb-5">
              <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: 400 }}>
                <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Gym Classes</h4>
                <div className="d-inline-flex">
                  <p className="m-0 text-white">
                    <Link className="text-white" to="/">Home</Link>
                  </p>
                  <p className="m-0 text-white px-2">/</p>
                  <p className="m-0 text-white">Gym Classes</p>
                </div>
              </div>
            </div>

            <MDBContainer className="py-4" style={{ backgroundColor: 'rgba(24,29,43,255)'}} >
              <div className="container-fluid position-relative bmi mt-5" style={{ marginBottom: 90 }}>
                <div className="container">
                  <div className="row px-3 align-items-center">
                    <div className="container-fluid position-relative bmi mt-5" style={{ marginBottom: 90 }}>
                      <div className="container">
                        <div className="row px-3 align-items-center">
                          <div className="p-2">
                            <input
                              type="text"
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              placeholder="Search by name or username"
                            />
                            <Table Table striped bordered hover variant="dark">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Image</th>
                                  <th>First Name</th>
                                  <th>Last Name</th>
                                  <th>Email</th>
                                  <th>Role</th>
                                  <th>Profile</th>
                                  <th>Delete</th>
                                </tr>
                              </thead>
                              <tbody>
                                {filteredUsers.map((user, index) => (
                                  <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                      <img
                                        src={require('../images/' + user.path)}
                                        alt="Profile"
                                        className="rounded-circle"
                                        style={{
                                          width: "40px",
                                          height: "40px",
                                          margin: "relative",
                                        }}
                                      />
                                    </td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.username}</td>
                                    <td>{user.role}</td>
                                    <td>
                                    <button
  type="button"
  className="btn btn-primary"
  onClick={() => handleOpenProfileModal(user.id)}
>
  Profile
</button>

                                    </td>
                                    <td>
                                      <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleOpenDeleteModal(user.id)}
                                      >
                                        Delete
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          </div>
                          <UserProfileModal
  userId={selectedUserIdForProfile}
  isOpen={profileModalOpen}
  toggle={handleCloseProfileModal}
/>
                          <DeleteModal
                            isOpen={deleteModalOpen}
                            toggle={handleCloseDeleteModal}
                            handleConfirmDelete={handleConfirmDelete}
                          />
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MDBContainer>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Users;
