import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";

const Login = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8089/api/v1/auth/register', { email, password });
            console.log('Connexion réussie.');
        } catch (error) {
            console.error('Erreur lors de la connexion:', error.response.data);
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
        Login
      </h4>
      <div className="d-inline-flex">
        <p className="m-0 text-white">
          {/* <a className="text-white" href="">
            Home
          </a> */}
          <Link className="text-white" to="/">Home</Link>

        </p>
        <p className="m-0 text-white px-2">/</p>
        <p className="m-0 text-white">Login</p>
      </div>
    </div>
  </div>



    <div className="container">
      <form action="/login" method="post" onSubmit={handleSubmit}>
        {/* error message */}
        {/* {window.location.search.includes('error') && (
          <div className="alert alert-danger">Invalid username or password.</div>
        )} */}
        {/* logout message */}
        {/* {window.location.search.includes('logout') && (
          <div className="alert alert-info">You have been logged out.</div>
        )} */}
        <div className="row m-5 no-gutters shadow-lg">
          <div className="col-md-6 d-none d-md-block">
            <img
              src="img/carousel-1.jpg"
              className="img-fluid"
              style={{ minHeight: '100%' }}
              alt="Login Image"
            />
          </div>
          <div className="col-md-6 bg-white p-5">
            <h3 className="pb-3">Login</h3>
            <div className="form-style">
              <div className="form-group pb-3">
              <label htmlFor="email">Email:</label>
                {/* <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Enter Email ID"
                  autoFocus
                /> */}
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group pb-3">
                <label htmlFor="password">Password:</label>
                {/* <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter Password"
                /> */}
                <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <input name="" type="checkbox" value="" />
                  <span className="pl-2 font-weight-bold">Remember Me</span>
                </div>
                <div>
                  <a href="#">Forget Password?</a>
                </div>
              </div>
              <div className="pb-2">
                <input
                  type="submit"
                  name="login-submit"
                  id="login-submit"
                  className="form-control btn btn-dark"
                  value="Log In"
                />
              </div>
              <div className="pt-4 text-center">
                Get Members Benefit. <Link to="/signup">Sign Up</Link>
                {/* <a href="/signup">Sign Up</a> */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <Footer/>
    </>
    
  );
};

export default Login;
