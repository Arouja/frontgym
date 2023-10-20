import React from "react";
import { Link } from "react-router-dom";
import Nav from "../navbar/Nav";

const Addcourse = () => {
    return(
        <>
         <Nav />
        <br />
        <br />
         <br />
         <br />
        <Link to="/listcourse">
          <button> Return to list of Course</button>
        </Link>
        <div>
        <br />
        <div className="container">
    <div className="row">
      <div className="card col-md-6 offset-md-3 offset-md-3">
        <h3 className="text-center">Add Course</h3>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label> Course: </label>
              <input
                placeholder="Course"
                name="course"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label> Trainer Name: </label>
              <input
                placeholder="Trainer Name"
                name="trainername"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label> Time: </label>
              <input
                placeholder="Time"
                name="time"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label> Week Days: </label>
              <input
                placeholder="Week Days"
                name="weekdays"
                className="form-control"
              />
            </div>
            <Link to="/listcourse">
            <button className="btn btn-success">Add</button>
            </Link>
            <Link to="/listcourse">
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
export default Addcourse;