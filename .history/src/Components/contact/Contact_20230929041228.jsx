import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";


const Contact = () => {

    return(
        <>
        <Navbar/>
  {/* Page Header Start */}
  <div className="container-fluid page-header mb-5">
    <div
      className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
      style={{ minHeight: 400 }}
    >
      <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">
        Contact Us
      </h4>
      <div className="d-inline-flex">
        <p className="m-0 text-white">
          {/* <a className="text-white" href="">
            Home
          </a> */}
          <Link className="text-white" to="/">Home</Link>
        </p>
        <p className="m-0 text-white px-2">/</p>
        <p className="m-0 text-white">Contact Us</p>
      </div>
    </div>
  </div>
  {/* Page Header End */}

  {/* Contact Start */}
  
  {/* Contact End */}
  <Footer/>
</>

    )
};
export default Contact;