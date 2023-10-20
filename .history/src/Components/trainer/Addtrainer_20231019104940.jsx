import React from "react";
import { Link } from "react-router-dom";
import Nav from "../navbar/Nav";
import CustomNavbar from "../navbar/CustomNavbar";

const Addtrainer = () => {
    return(
        <>
         <CustomNavbar/>
        <br />
        <br />
         <br />
         <br />
        <Link to="/trainer">
          <button> Return to list of trainer</button>
        </Link>
        <div>
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
      </>
    )

}
export default Addtrainer;