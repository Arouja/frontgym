import React from "react";
import CustomNavbar from "../navbar/CustomNavbar";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";


const Contact = () => {

    return(
        <>
        <CustomNavbar/>
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
  <div className="container pt-5">
    <div className="d-flex flex-column text-center mb-5">
      <h4 className="text-primary font-weight-bold">Get In Touch</h4>
      <h4 className="display-4 font-weight-bold">Email Us For Any Query</h4>
    </div>
    <div className="row px-3 pb-2">
      <div className="col-sm-4 text-center mb-3">
        <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary" />
        <h4 className="font-weight-bold">Address</h4>
        <p>Bardo, TN</p>
      </div>
      <div className="col-sm-4 text-center mb-3">
        <i className="fa fa-2x fa-phone-alt mb-3 text-primary" />
        <h4 className="font-weight-bold">Phone</h4>
        <p>+216 26 12 25 36</p>
      </div>
      <div className="col-sm-4 text-center mb-3">
        <i className="far fa-2x fa-envelope mb-3 text-primary" />
        <h4 className="font-weight-bold">Email</h4>
        <p>arij@gmail.com</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 pb-5">
        <iframe
          style={{ width: "100%", height: 392 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
          frameBorder={0}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
      <div className="col-md-6 pb-5">
        <div className="contact-form">
          <div id="success" />
          <form name="sentMessage" id="contactForm" noValidate="novalidate">
            <div className="control-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required="required"
                data-validation-required-message="Please enter your name"
              />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                required="required"
                data-validation-required-message="Please enter your email"
              />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Subject"
                required="required"
                data-validation-required-message="Please enter a subject"
              />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <textarea
                className="form-control"
                rows={6}
                id="message"
                placeholder="Message"
                required="required"
                data-validation-required-message="Please enter your message"
                defaultValue={""}
              />
              <p className="help-block text-danger" />
            </div>
            <div>
              <button
                className="btn btn-outline-primary"
                type="submit"
                id="sendMessageButton"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
  <Footer/>
</>

    )
};
export default Contact;