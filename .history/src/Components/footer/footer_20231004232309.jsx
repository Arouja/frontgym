import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from React Router

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <div className="footer container-fluid mt-5 py-5 px-sm-3 px-md-5 text-white">
        <div className="row pt-10">
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-primary mb-4">Get In Touch</h4>
            <p>
              <i className="fa fa-map-marker-alt mr-2" />
              123 Street, New York, USA
            </p>
            <p>
              <i className="fa fa-phone-alt mr-2" />
              +012 345 67890
            </p>
            <p>
              <i className="fa fa-envelope mr-2" />
              info@example.com
            </p>
            <div className="d-flex justify-content-start mt-4">
              <Link
                to="#"
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 40, height: 40 }}
              >
                <i className="fab fa-twitter" />
              </Link>
              <Link
                to="#"
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 40, height: 40 }}
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                to="#"
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 40, height: 40 }}
              >
                <i className="fab fa-linkedin-in" />
              </Link>
              <Link
                to="#"
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 40, height: 40 }}
              >
                <i className="fab fa-instagram" />
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
    <h4 className="text-primary mb-4">Quick Links</h4>
    <div className="d-flex flex-column justify-content-start">

      {/* <a className="text-white mb-2" href="#">
        <i className="fa fa-angle-right mr-2" />
        Home
      </a> */}
      <Link className="text-white mb-2" to="/">
      <i className="fa fa-angle-right mr-2" />
        Home</Link>

      {/* <a className="text-white mb-2" href="#">
        <i className="fa fa-angle-right mr-2" />
        About Us
      </a> */}
      <Link className="text-white mb-2" to="/about">
      <i className="fa fa-angle-right mr-2" />
        About Us</Link>

      {/* <a className="text-white mb-2" href="#">
        <i className="fa fa-angle-right mr-2" />
        Our Features
      </a> */}
      <Link className="text-white mb-2" to="/feature">
      <i className="fa fa-angle-right mr-2" />
        Our Features</Link>

      {/* <a className="text-white mb-2" href="#">
        <i className="fa fa-angle-right mr-2" />
        Classes
      </a> */}
      <Link className="text-white mb-2" to="/classes">
      <i className="fa fa-angle-right mr-2" />
        Classes</Link>

      {/* <a className="text-white" href="#">
        <i className="fa fa-angle-right mr-2" />
        Contact Us
      </a> */}
      <Link className="text-white" to="/contact">
      <i className="fa fa-angle-right mr-2" />
        Contact Us</Link>
    </div>
  </div>
  <div className="col-lg-3 col-md-6 mb-5">
    <h4 className="text-primary mb-4">Popular Links</h4>
    <div className="d-flex flex-column justify-content-start">
      {/* <a className="text-white mb-2" href="#">
        <i className="fa fa-angle-right mr-2" />
        Home
      </a> */}
      <Link className="text-white mb-2" to="/">
      <i className="fa fa-angle-right mr-2" />
        Home</Link>

      {/* <a className="text-white mb-2" href="#">
        <i className="fa fa-angle-right mr-2" />
        About Us
      </a> */}
      <Link className="text-white mb-2" to="/about">
      <i className="fa fa-angle-right mr-2" />
        About Us</Link>
      
      {/* <a className="text-white mb-2" href="#">
        <i className="fa fa-angle-right mr-2" />
        Our Features
      </a> */}
      <Link className="text-white mb-2" to="/feature">
      <i className="fa fa-angle-right mr-2" />
        Our Feature</Link>

      {/* <a className="text-white mb-2" href="#">
        <i className="fa fa-angle-right mr-2" />
        Classes
      </a> */}
      <Link className="text-white mb-2" to="/classes">
      <i className="fa fa-angle-right mr-2" />
        Classes</Link>

      {/* <a className="text-white" href="#">
        <i className="fa fa-angle-right mr-2" />
        Contact Us
      </a> */}
      <Link className="text-white" to="/contact">
      <i className="fa fa-angle-right mr-2" />
        Contact Us</Link>
    </div>
  </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-primary mb-4">Opening Hours</h4>
            <h5 className="text-white">Monday - Friday</h5>
            <p>8.00 AM - 8.00 PM</p>
            <h5 className="text-white">Saturday - Sunday</h5>
            <p>2.00 PM - 8.00 PM</p>
          </div>
        </div>
        <div className="container border-top border-dark pt-5">
          <p className="m-0 text-center text-white">
            ©{' '}
            {/* <Link to="#" className="text-white font-weight-bold">
              Your Site Name
            </Link> */}
            2023 Designed by Arij & Naoufel{' '}
            {/* <Link to="https://htmlcodex.com" className="text-white font-weight-bold">
              HTML Codex
            </Link> */}
          </p>
        </div>
      </div>
      {/* Footer End */}
    </>
  )
};

export default Footer;


