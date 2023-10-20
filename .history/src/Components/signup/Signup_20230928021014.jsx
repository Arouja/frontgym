import axios from 'axios';
import React, { useState } from 'react';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const Signup = () => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const role = 'CLIENT';

  const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
          await axios.post('http://localhost:8089/api/v1/auth/register', { firstName, lastName, email, password, role });
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
        SignUp
      </h4>
      <div className="d-inline-flex">
        <p className="m-0 text-white">
          {/* <a className="text-white" href="">
            Home
          </a> */}
          <Link className="text-white" to="/">Home</Link>

        </p>
        <p className="m-0 text-white px-2">/</p>
        <p className="m-0 text-white">Signup</p>
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
  <div className="form-group mb-4">
    <label htmlFor="firstName">First Name</label>
    <input
      type="text"
      className="form-control"
      id="firstName"
      placeholder="First Name"
      value={firstName}
      onChange={(e) => setfirstName(e.target.value)}
      required
    />
  </div>

  <div className="form-group mb-4">
    <label htmlFor="lastName">Last Name</label>
    <input
      type="text"
      className="form-control"
      id="lastName"
      placeholder="Last Name"
      value={lastName}
      onChange={(e) => setlastName(e.target.value)}
      required
    />
  </div>

  <div className="form-group mb-4">
    <label htmlFor="email">Email</label>
    <input
      type="email"
      className="form-control"
      id="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>

  <div className="form-group mb-4">
    <label htmlFor="password">Password</label>
    <input
      type="password"
      className="form-control"
      id="password"
      placeholder="Mot de passe"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
  </div>

  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
    <button type="submit" className="btn btn-success">Register</button>
  </div>

  <div className="form-check d-flex justify-content-center mb-5">
    Already have an account. <Link to="/login">Login</Link>
  </div>
</form>


                  </div>

                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="img/blog-1.jpg" className="img-fluid" alt="Sample image" />
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


const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, { signup })(Signup);

