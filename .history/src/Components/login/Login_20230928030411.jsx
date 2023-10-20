import React, { useState } from 'react';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/authActions';
import { useHistory } from 'react-router-dom';
const Login = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      console.log('Connexion réussie.');
      history.push('/profile'); // Redirect to profile page after successful login
    } catch (error) {
      console.error('Erreur lors de la connexion:', error.response.data);
    }
  };
  
  return (
    <>
      <Navbar />
      <div className="container-fluid page-header mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: 400 }}>
          <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Login</h4>
          <div className="d-inline-flex">
            <p className="m-0 text-white">
              <Link className="text-white" to="/">Home</Link>
            </p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">Login</p>
          </div>
        </div>
      </div>

      <div className="container">
        <form action="/login" method="post" onSubmit={handleSubmit}>
          <div className="row m-5 no-gutters shadow-lg">
            <div className="col-md-6 d-none d-md-block">
              <img src="img/carousel-1.jpg" className="img-fluid" style={{ minHeight: '100%' }} alt="Login Image" />
            </div>
            <div className="col-md-6 bg-white p-5">
              <h3 className="pb-3">Login</h3>
              <div className="form-style">
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
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <input name="" type="checkbox" value="" />
                    <span className="pl-2 font-weight-bold">Remember Me</span>
                  </div>
                  <div>
                    <Link to="#">Forget Password?</Link>
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
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, { login })(Login);
