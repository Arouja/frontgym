import React from 'react';
import Nav from "../navbar/Nav";



const Updatecustomer = () => {
    return(
        <>
         <Nav/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
  <br />
  <div className="container">
    <div className="row">
      <div className="card col-md-6 offset-md-3 offset-md-3">
        <h3 className="text-center">Update Client</h3>
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
              <label> Email: </label>
              <input
                placeholder="Email Address"
                name="emailId"
                className="form-control"
              />
            </div>
            <button className="btn btn-success">Save</button>
            <button className="btn btn-danger" style={{ marginLeft: 10 }}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default Updatecustomer;