import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../actions/authActions';

const CustomNavbar = ({ profilePath }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

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
    <Navbar bg="body-tertiary" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <h1 className="m-0 display-4 font-weight-bold text-uppercase text-white">GYMAPP</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarCollapse" />
      <Navbar.Collapse id="navbarCollapse">
        <Nav className="ml-auto p-4 bg-secondary">
          <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-link">About Us</Nav.Link>
          <Nav.Link as={Link} to="/feature" className="nav-link">Our Features</Nav.Link>
          <Nav.Link as={Link} to="/classes" className="nav-link">Classes</Nav.Link>
          <Nav.Link as={Link} to="/metrics" className="nav-link">Metrics</Nav.Link>
          {token && (
            <NavDropdown title={<img
              src={require('../../images/itachi.png')}
              alt="Profile"
              className="rounded-circle"
              style={{
                width: "40px",
                height: "40px",
                margin: "relative",
              }}
            />} id="nav-dropdown">
              <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/account">Account</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          )}
          {!token && <Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
