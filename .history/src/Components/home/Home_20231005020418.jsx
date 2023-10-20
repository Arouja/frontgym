import React from 'react';
import Navbar from '../navbar/CustomNavbar';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';

import About from '../about/About';

const Home = () => {
    return (

    <>
    <Navbar/>
  {/* Carousel Start */}
  <div className="container-fluid p-0">
    <div id="blog-carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <h3 className="text-primary text-capitalize m-0">
              Gym &amp; Fitness Center
            </h3>
            <h2 className="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">
              Best Gym In Town
            </h2>
            {/* <a
              href=""
              className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5"
            >
              Join Us Now
            </a> */}
            {/* <Link className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5" to="/join us now">Join Us Now</Link> */}
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <h3 className="text-primary text-capitalize m-0">
              Gym &amp; Fitness Center
            </h3>
            <h2 className="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">
              Get Body In Shape
            </h2>
            {/* <a
              href=""
              className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5"
            >
              Join Us Now
            </a> */}
            {/* <Link className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5" to="/join us now">Join Us Now</Link> */}
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#blog-carousel"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </a>
      <a
        className="carousel-control-next"
        href="#blog-carousel"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </a>
    </div>
  </div>
  {/* Carousel End */}

 {/* Features Start */}
 <div className="container-fluid my-5">
    <div className="row">
      <div className="col-lg-4 p-0">
        <div
          className="d-flex align-items-center bg-secondary text-white px-5"
          style={{ minHeight: 300 }}
        >
          <i className="flaticon-training display-3 text-primary mr-3" />
          <div className="">
            <h2 className="text-white mb-3">Progression</h2>
            <p>
            Progression in the gym refers to the gradual increase in exercise intensity, 
            weight lifted, or repetitions performed over time 
            to continually challenge and improve one's fitness level.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 p-0">
        <div
          className="d-flex align-items-center bg-primary text-white px-5"
          style={{ minHeight: 300 }}
        >
          <i className="flaticon-weightlifting display-3 text-secondary mr-3" />
          <div className="">
            <h2 className="text-white mb-3">Workout</h2>
            <p>
            A workout in the gym involves engaging in physical exercises 
            and training routines to enhance strength, endurance, flexibility, and overall fitness.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 p-0">
        <div
          className="d-flex align-items-center bg-secondary text-white px-5"
          style={{ minHeight: 300 }}
        >
          <i className="flaticon-treadmill display-3 text-primary mr-3" />
          <div className="">
            <h2 className="text-white mb-3">Nutrition</h2>
            <p>
            Nutrition in the gym refers to following a balanced 
            and healthy diet that supports fitness goals, muscle recovery, and overall well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Features End */}
  
  <Footer/>
</>
    )
};
export default Home;