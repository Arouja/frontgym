import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/CustomNavbar";
import Footer from "../footer/footer";

const Feature = () => {
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
        Our Features
      </h4>
      <div className="d-inline-flex">
        <p className="m-0 text-white">
          {/* <a className="text-white" href="">
            Home
          </a> */}
          <Link className="text-white" to="/">Home</Link>

        </p>
        <p className="m-0 text-white px-2">/</p>
        <p className="m-0 text-white">Our Features</p>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* GYM Feature Start */}
  <div className="container feature pt-5">
    <div className="d-flex flex-column text-center mb-5">
      <h4 className="text-primary font-weight-bold">Why Choose Us?</h4>
      <h4 className="display-4 font-weight-bold">
        Benifits of Joining Our GYM
      </h4>
    </div>
    <div className="row">
      <div className="col-md-6 mb-5">
        <div className="row align-items-center">
          <div className="col-sm-5">
            <img
              className="img-fluid mb-3 mb-sm-0"
              src="img/feature-1.jpg"
              alt="Image"
            />
            <i className="flaticon-barbell" />
          </div>
          <div className="col-sm-7">
            <h4 className="font-weight-bold">Videos Instruction</h4>
            <p>
               You gain access to video instructions 
               for workouts, allowing you to follow 
               expert-led routines at your convenience 
               and enhance your fitness journey.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-5">
        <div className="row align-items-center">
          <div className="col-sm-5">
            <img
              className="img-fluid mb-3 mb-sm-0"
              src="img/feature-2.jpg"
              alt="Image"
            />
            <i className="flaticon-training" />
          </div>
          <div className="col-sm-7">
            <h4 className="font-weight-bold">Training Calendar</h4>
            <p>
            Ensuring structured and organized workout 
            schedules to help you stay on track and achieve 
            your fitness objectives efficiently.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-5">
        <div className="row align-items-center">
          <div className="col-sm-5">
            <img
              className="img-fluid mb-3 mb-sm-0"
              src="img/feature-3.jpg"
              alt="Image"
            />
            <i className="flaticon-trends" />
          </div>
          <div className="col-sm-7">
            <h4 className="font-weight-bold">Free Apps &amp; WiFi</h4>
            <p>
            You can enjoy the convenience of free apps and WiFi, 
            making your fitness experience more enjoyable and connected.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-5">
        <div className="row align-items-center">
          <div className="col-sm-5">
            <img
              className="img-fluid mb-3 mb-sm-0"
              src="img/feature-4.jpg"
              alt="Image"
            />
            <i className="flaticon-support" />
          </div>
          <div className="col-sm-7">
            <h4 className="font-weight-bold">Community Support</h4>
            <p>
            Fostering motivation, accountability, 
            and a sense of belonging for a more 
            fulfilling fitness journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* GYM Feature End */}
  {/* Testimonial Start */}
  <div
    className="container-fluid position-relative testimonial mt-5"
    style={{ marginBottom: 90 }}
  >
    <div className="container">
      <div className="row px-3 align-items-center">
        <div className="col-md-6 bg-secondary">
          <div
            className="d-flex align-items-center px-3"
            style={{ minHeight: 450 }}
          >
            <div
              id="carouselId"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselId"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#carouselId" data-slide-to={1} />
                <li data-target="#carouselId" data-slide-to={2} />
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <div className="d-flex align-items-center mb-4 text-white">
                    <img
                      width={80}
                      height={80}
                      className="rounded-circle bg-dark p-2"
                      src="img/testimonial-1.jpg"
                      alt="Image"
                    />
                    <div className="pl-4">
                      <h4 className="text-primary">Med</h4>
                      {/* <p className="m-0">Profession</p> */}
                    </div>
                  </div>
                  <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                  A very nice gym with very friendly 
                  and very professional coaches!
                I recommend without hesitation
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex align-items-center mb-4 text-white">
                    <img
                      width={80}
                      height={80}
                      className="rounded-circle bg-dark p-2"
                      src="img/testimonial-2.jpg"
                      alt="Image"
                    />
                    <div className="pl-4">
                      <h4 className="text-primary">Adel</h4>
                      {/* <p className="m-0">Profession</p> */}
                    </div>
                  </div>
                  <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                  I highly recommend this gym, attentive and professional staff, 
                  pleasant welcome, Well equipped and clean room, 
                  Well-animated group lessons, Family and friendly atmosphere.
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex align-items-center mb-4 text-white">
                    <img
                      width={80}
                      height={80}
                      className="rounded-circle bg-dark p-2"
                      src="img/testimonial-3.jpg"
                      alt="Image"
                    />
                    <div className="pl-4">
                      <h4 className="text-primary">Mehdi</h4>
                      {/* <p className="m-0">Profession</p> */}
                    </div>
                  </div>
                  <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                  Very nice gym, good reception, good equipment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="pl-md-3 d-none d-md-block">
            <h4 className="text-primary">Testimonial</h4>
            <h4 className="display-4 mb-4 text-white font-weight-bold">
              What Our Clients Say?
            </h4>
            <p className="m-0 text-white">
            Our clients rave about the gym's exceptional facilities, 
            motivating trainers, and transformative results.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
  <Footer/>
</>

    )
};
export default Feature;