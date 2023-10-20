import React from "react";
import { Link } from "react-router-dom";
import Nav from "../navbar/Nav";

const Updateoffers = () => {

    return(
        <>
        <Nav/>
        <br />
        <br />
        <br />
        <br />
        <Link to="/listoffers">
          <button> Return to list of offers</button>
        </Link>
        <div>
        <br />
        <div className="container">
    <div className="row">
      <div className="card col-md-6 offset-md-3 offset-md-3">
        <h3 className="text-center">Update Offers</h3>
        <div className="card-body">
          <form>
          <div className="form-group">
              <label> Image: </label>
              <input
                placeholder="Image"
                name="image"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label> Description: </label>
              <input
                placeholder="Description"
                name="description"
                className="form-control"
              />
            </div>
            
            
            <Link to="/listoffers">
            <button className="btn btn-success">Update</button>
            </Link>
            <Link to="/listoffers">
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
export default Updateoffers;