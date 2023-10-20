import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Footer from "../Components/footer/footer";

function Users() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  return (
    <>
      <div style={{ display: 'flex' }}>
        {/* Include your CustomNavbar component */}
        {/* <CustomNavbar profilePath={profile && profile.path} /> */}

        <div className="container-fluid page-header mb-5">
          {/* ...Your page header content... */}
        </div>

        <section style={{ backgroundColor: 'rgba(19,23,34,255)' }}>
    {/* Page Header Start */}
    
<div className="container-fluid page-header mb-5">
  <div
    className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
    style={{ minHeight: 400 }}
  >
    <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">
      Gym Classes
    </h4>
    <div className="d-inline-flex">
      <p className="m-0 text-white">
        {/* <a className="text-white" href="">
          Home
        </a> */}
        <Link className="text-white" to="/">Home</Link>
      </p>
      <p className="m-0 text-white px-2">/</p>
      <p className="m-0 text-white">Gym Classes</p>
    </div>
  </div>
</div>
{/* Page Header End */}


    <div style={{ display: 'flex' }}> 
    
  
    <div className="p-2">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name or username"
      />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            
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
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </section>
      </div>

      {/* Include your Footer component */}
      {/* <Footer /> */}
    </>
  );
}

export default Users;