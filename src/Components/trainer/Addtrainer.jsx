import React from "react";
import { Link } from "react-router-dom";
import Nav from "../navbar/Nav";
import CustomNavbar from "../navbar/CustomNavbar";
import Footer from "../footer/footer";

const Addtrainer = () => {
    return(
        <>
         <CustomNavbar/>

         <div className="container-fluid page-header mb-5">
        
      
  
      <section style= {{ backgroundColor: 'rgba(19,23,34,255)' }} >
      {/* Page Header Start */}
      
  <div className="container-fluid page-header mb-5">
    <div
      className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
      style={{ minHeight: 400 }}
    >
      <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">
        Gym Classes
      </h4>
      <div className="d-inline-flex">
        <p className="m-0 text-white">
          {/* <a className="text-white" href="">
            Home
          </a> */}
          <Link className="text-white" to="/">Home</Link>
        </p>
        <p className="m-0 text-white px-2">/</p>
        <p className="m-0 text-white">Gym Classes</p>
      </div>
    </div>
  </div>
  {/* Page Header End */}


      <div style={{ display: 'flex' }}> 
        




  
        <br />
        <div className="container">
    <div className="row">
      <div className="card col-md-6 offset-md-3 offset-md-3">
        <h3 className="text-center">Add trainer</h3>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label> First Name: </label>
              <input
                placeholder="First Name"
                name="firstName"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label> Last Name: </label>
              <input
                placeholder="Last Name"
                name="lastName"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label> Speciality: </label>
              <input
                placeholder="Speciality"
                name="specialityid"
                className="form-control"
              />
            </div>
            <Link to="/trainer">
            <button className="btn btn-success">Add</button>
            </Link>
            <Link to="/trainer">
            <button className="btn btn-danger" style={{ marginLeft: 10 }}>
              Cancel
            </button>
            </Link>
          </form>
          </div>
      </div>
    </div>
  </div>
  </div>
      </section>

     </div>
   
      <Footer />
      </>
    )

}
export default Addtrainer;