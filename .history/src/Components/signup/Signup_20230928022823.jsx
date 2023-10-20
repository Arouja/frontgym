import React, { useState } from 'react';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../actions/authActions';

const Signup = ({ register }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(firstName, lastName, email, password);
      console.log('Inscription réussie.');
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error.response.data);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid page-header mb-5">
        {/* Rest of your code for page header */}
      </div>
      <section className="vh-100" style={{ backgroundColor: '#eee' }}>
        <div className="container h-100">
          {/* Assuming param.success is a variable from the server */}
          {/* {success && (
            <div className="alert alert-info">
              You've successfully registered to our awesome app!
            </div>
          )} */}
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
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                          />
                        </div>
                        {/* Repeat similar code for lastName, email, and password */}
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
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, { register })(Signup);
