import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
          await axios.post('http://localhost:8089/api/v1/auth/register', { firstname, lastname, email, password });
          console.log('Inscription réussie.');
      } catch (error) {
          console.error('Erreur lors de l\'inscription:', error.response.data);
      }
  };

  return (
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
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div>
          {/* Assuming param.success is a variable from the server */}
          {/* {success && (
            <div className="alert alert-info">
              You've successfully registered to our awesome app!
            </div>
          )} */}
        </div>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <form action="/registration" method="post" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        {/* Assuming FontAwesome icon is used */}
                        {/* <i className="fa-solid fa-user"></i> */}
                        <div className="form-outline flex-fill mb-0">
                          {/* <input
                            id="firstName"
                            className="form-control"
                            type="text"
                            name="firstName"
                            required
                            autoFocus
                          /> */}
                          <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                          <label className="form-label" htmlFor="firstName">First Name</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        {/* Assuming FontAwesome icon is used */}
                        {/* <i className="fa-solid fa-user"></i> */}
                        <div className="form-outline flex-fill mb-0">
                          {/* <input
                            id="lastName"
                            className="form-control"
                            type="text"
                            name="lastName"
                            required
                            autoFocus
                          /> */}
                          <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                          <label className="form-label" htmlFor="lastName">Last Name</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        {/* Assuming FontAwesome icon is used */}
                        {/* <i className="fa-solid fa-envelope"></i> */}
                        <div className="form-outline flex-fill mb-0">
                          {/* <input
                            id="email"
                            className="form-control"
                            type="email"
                            name="email"
                            required
                            autoFocus
                          /> */}
                          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                          <label className="form-label" htmlFor="email">Email</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        {/* Assuming FontAwesome icon is used */}
                        {/* <i className="fa-solid fa-key"></i> */}
                        <div className="form-outline flex-fill mb-0">
                          {/* <input
                            id="password"
                            className="form-control"
                            type="password"
                            name="password"
                            required
                            autoFocus
                          /> */}
                          <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                          <label className="form-label" htmlFor="password">Password</label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-success">Register</button>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        Already have an account. <Link to="/login">Login</Link>
                        {/* <Link to="/login">Login</Link> */}
                        {/* <a href="/login">Login</a> */}
                      </div>
                    </form>
                  </div>

                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="img/blog-1.jpg"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default Signup;
