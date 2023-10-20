import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../actions/authActions';
import axios from 'axios';

const CustomNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8089/api/v1/users/getuserbytoken/${token}`);
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error.response.data);
    }
  };

  return (
    <Navbar expand="lg" className="bg-dark text-white fixed-top">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            {!token && <Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link>}
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">About Us</Nav.Link>
            <Nav.Link as={Link} to="/feature" className="nav-link">Our Features</Nav.Link>
            <Nav.Link as={Link} to="/classes" className="nav-link">Classes</Nav.Link>
            <NavDropdown title="Metrics" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/metrics">Metrics</NavDropdown.Item>
              <NavDropdown.Item href="/bmi">BMI</NavDropdown.Item>
              <NavDropdown.Item href="/lbm">LBM</NavDropdown.Item>
              <NavDropdown.Item href="/orm">ORM</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5"></NavDropdown.Item>
            </NavDropdown>
            {token && <Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link>}
          </Nav>
          {token && (
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          )}
          {token && (
            <div className="nav-item dropdown">
              <button
                className="nav-link btn btn-link"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={toggleDropdown}
              >
                {profile && (
                  <img
                    src={require('../../images/' + profile.path)}
                    alt="Profile"
                    className="rounded-circle"
                    style={{
                      width: "40px",
                      height: "40px",
                      margin: "relative",
                    }}
                  />
                )}
              </button>
              {profile && (
                <div className="dropdown-menu dropdown-menu-right text-capitalize">
                  <Link to="/profile" className="dropdown-item">
                    Profile
                  </Link>
                  <Link to="/account" className="dropdown-item">
                    Account
                  </Link>
                  <Link to="/settings" className="dropdown-item">
                    Settings
                  </Link>
                  <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
