import React from "react";
import { Link } from "react-router-dom";
import Nav from "../navbar/Nav";
const Listcourse = () => {
    return(
        <>
         <Nav />
        <br />
        <br />
        <br />

        <div className="container my-2">
  <h1 className="text-center">List of Course</h1>
  <Link to="/addcourse" className="btn btn-primary btn-sm mb-3">
  {" "}
    Add Course{" "}
  </Link>


        <div className="container gym-feature py-5">
    <div className="d-flex flex-column text-center mb-5">
      <h4 className="text-primary font-weight-bold">Class Timetable</h4>
      <h4 className="display-4 font-weight-bold">
        Working Hours and Class Time
      </h4>
    </div>
    <div className="tab-class">
      <ul className="nav nav-pills justify-content-center mb-4">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="pill" href="#class-all">
            All Classes
          </a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" href="#class-cardio">
            Cardio
          </a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" href="#class-crossfit">
            Crossfit
          </a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" href="#class-powerlifting">
            Powerlifting
          </a>
          
        </li>
      </ul>
      <div className="tab-content">
        <div id="class-all" className="container tab-pane p-0 active">
          <div className="table-responsive">
            <table className="table table-bordered table-lg m-0">
              <thead className="bg-secondary text-white text-center">
                <tr>
                  <th>Time</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <th className="bg-secondary text-white align-middle">
                    6.00am - 8.00am
                  </th>
                  <td>
                    <h5>Cardio</h5>John Deo
                  </td>
                  <td />
                  <td>
                    <h5>Crossfit</h5>Adam Phillips
                  </td>
                  <td />
                  <td>
                    <h5>Power Lifting</h5>James Alien
                  </td>
                  <td />
                  <td>
                    <h5>Cardio</h5>John Deo
                  </td>
                  <td>
            <Link to="/updatecourse"  className="btn btn-primary">
                Update
            </Link>
            <br />
            <br />
          {/* <a href="/showFormForUpdate/1" className="btn btn-primary">
            Update
          </a> */}
          <a href="/deletecourse/1" className="btn btn-danger">
            Delete
          </a>
        </td>
                </tr>
                <tr>
                  <th className="bg-secondary text-white align-middle">
                    10.00am - 12.00am
                  </th>
                  <td />
                  <td>
                    <h5>Power Lifting</h5>James Alien
                  </td>
                  <td />
                  <td>
                    <h5>Cardio</h5>John Deo
                  </td>
                  <td />
                  <td>
                    <h5>Crossfit</h5>Adam Phillips
                  </td>
                  <td />
                  <td>
            <Link to="/updatecourse"  className="btn btn-primary">
                Update
            </Link>
            <br />
            <br />
          {/* <a href="/showFormForUpdate/1" className="btn btn-primary">
            Update
          </a> */}
          <a href="/deletecourse/1" className="btn btn-danger">
            Delete
          </a>
        </td>
                </tr>
                <tr>
                  <th className="bg-secondary text-white align-middle">
                    5.00pm - 7.00pm
                  </th>
                  <td>
                    <h5>Crossfit</h5>Adam Phillips
                  </td>
                  <td />
                  <td>
                    <h5>Power Lifting</h5>James Alien
                  </td>
                  <td />
                  <td>
                    <h5>Cardio</h5>John Deo
                  </td>
                  <td />
                  <td>
                    <h5>Crossfit</h5>Adam Phillips
                  </td>
                  <td>
            <Link to="/updatecourse"  className="btn btn-primary">
                Update
            </Link>
            <br />
            <br />
          {/* <a href="/showFormForUpdate/1" className="btn btn-primary">
            Update
          </a> */}
          <a href="/deletecourse/1" className="btn btn-danger">
            Delete
          </a>
        </td>
                </tr>
                <tr>
                  <th className="bg-secondary text-white align-middle">
                    7.00pm - 9.00pm
                  </th>
                  <td />
                  <td>
                    <h5>Cardio</h5>John Deo
                  </td>
                  <td />
                  <td>
                    <h5>Crossfit</h5>Adam Phillips
                  </td>
                  <td />
                  <td>
                    <h5>Power Lifting</h5>James Alien
                  </td>
                  <td />
                  <td>
            <Link to="/updatecourse"  className="btn btn-primary">
                Update
            </Link>
            <br />
            <br />
          {/* <a href="/showFormForUpdate/1" className="btn btn-primary">
            Update
          </a> */}
          <a href="/deletecourse/1" className="btn btn-danger">
            Delete
          </a>
        </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="class-cardio" className="container tab-pane fade p-0">
          <div className="table-responsive">
            <table className="table table-bordered table-lg m-0">
              <thead className="bg-secondary text-white text-center">
                <tr>
                  <th>Time</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <th className="bg-secondary text-white align-middle">
                    6.00am - 8.00am
                  </th>
                  <td className="bg-primary text-white">
                    <h5 className="text-white">Cardio</h5>John Deo
                  </td>
                  <td />
                  <td>
                    <h5>Crossfit</h5>Adam Phillips
                  </td>
                  <td />
                  <td>
                    <h5>Power Lifting</h5>James Alien
                  </td>
                  <td />
                  <td className="bg-primary text-white">
                    <h5 className="text-white">Cardio</h5>John Deo
                  </td>
                </tr>
                <tr>
                  <th className="bg-secondary text-white align-middle">
                    10.00am - 12.00am
                  </th>
                  <td />
                  <td>
                    <h5>Power Lifting</h5>James Alien
                  </td>
                  <td />
                  <td className="bg-primary text-white">
                    <h5 className="text-white">Cardio</h5>John Deo
                  </td>
                  <td />
                  <td>
                    <h5>Crossfit</h5>Adam Phillips
                  </td>
                  <td />
                </tr>
                <tr>
                  <th className="bg-secondary text-white align-middle">
                    5.00pm - 7.00pm
                  </th>
                  <td>
                    <h5>Crossfit</h5>Adam Phillips
                  </td>
                  <td />
                  <td>
                    <h5>Power Lifting</h5>James Alien
                  </td>
                  <td />
                  <td className="bg-primary text-white">
                    <h5 className="text-white">Cardio</h5>John Deo
                  </td>
                  <td />
                  <td>
                    <h5>Crossfit</h5>Adam Phillips
                  </td>
                </tr>
                <tr>
                  <th className="bg-secondary text-white align-middle">
                    7.00pm - 9.00pm
                  </th>
                  <td />
                  <td className="bg-primary text-white">
                    <h5 className="text-white">Cardio</h5>John Deo
                  </td>
                  <td />
                  <td>
                    <h5>Crossfit</h5>Adam Phillips
                  </td>
                  <td />
                  <td>
                    <h5>Power Lifting</h5>James Alien
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="class-crossfit" className="container tab-pane fade p-0">
          <div className="table-responsive">
            <table className="table table-bordered table-lg m-0">
              <thead className="bg-secondary text-white text-center">
                <tr>
                  <th>Time</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <th className="bg-secondary text-white align-middle">
                    6.00am - 8.00am
                  </th>
                  <td>
                    <h5>Cardio</h5>John Deo
                  </td>
                  <td />
                  <td className="bg-primary text-white">
                    <h5 className="text-white">Crossfit</h5>Adam Phillips
                  </td>
                  <td />
                  <td>
                    <h5>Power Lifting</h5>James Alien
                  </td>
                  <td />
                  <td>
                    <h5>Cardio</h5>John Deo
                  </td>
                </tr>
                <tr>
                  <th className="bg-secondary text-white align-middle">
                    10.00am - 12.00am
                  </th>
                  <td />
                  <td>
                    <h5>Power Lifting</h5>James Alien
                  </td>
                  <td />
                  <td>
                    <h5>Cardio</h5>John Deo
                  </td>
                  <td />
                  <td className="bg-primary text-white">
                    <h5 className="text-white">Crossfit</h5>Adam Phillips
                  </td>
                  <td />
                </tr>
                <tr>
                  <th className="bg-secondary text-white align-middle">
                    5.00pm - 7.00pm
                  </th>
                  <td className="bg-primary text-white">
                    <h5 className="text-white">Crossfit</h5>Adam Phillips
                  </td>
                  <td />
                  <td>
                    <h5>Power Lifting</h5>James Alien
                  </td>
                  <td />
                  <td>
                    <h5>Cardio</h5>John Deo
                  </td>
                  <td />
                  <td className="bg-primary text-white">
                    <h5 className="text-white">Crossfit</h5>Adam Phillips
                  </td>
                </tr>
                <tr>
                  <th className="bg-secondary text-white align-middle">
                    7.00pm - 9.00pm
                  </th>
                  <td />
                  <td>
                    <h5>Cardio</h5>John Deo
                  </td>
                  <td />
                  <td className="bg-primary text-white">
                    <h5 className="text-white">Crossfit</h5>Adam Phillips
                  </td>
                  <td />
                  <td>
                    <h5>Power Lifting</h5>James Alien
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="class-powerlifting" className="container tab-pane fade p-0">
          <div className="table-responsive">
            <table className="table table-bordered table-lg m-0">
              <thead className="bg-secondary text-white text-center">
                <tr>
                  <th>Time</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                  
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <th className="bg-secondary text-white align-middle">
                    6.00am - 8.00am
                  </th>
                  <td>
                    <h5>Cardio</h5>John Deo
                  </td>
                  <td />
                  <td>
                    <h5>Crossfit</h5>Adam Phillips
                  </td>
                  <td />
                  <td className="bg-primary text-white">
                    <h5 className="text-white">Power Lifting</h5>James Alien
                  </td>
                  <td />
                  <td>
                    <h5>Cardio</h5>John Deo
                  </td>
                </tr>
                <tr>
                  <th className="bg-secondary text-white align-middle">
                    10.00am - 12.00am
                  </th>
                  <td />
                  <td className="bg-primary text-white">
                    <h5 className="text-white">Power Lifting</h5>James Alien
                  </td>
                  <td />
                  <td>
                    <h5>Cardio</h5>John Deo
                  </td>
                  <td />
                  <td>
                    <h5>Crossfit</h5>Adam Phillips
                  </td>
                  <td />
                </tr>
                <tr>
                  <th className="bg-secondary text-white align-middle">
                    5.00pm - 7.00pm
                  </th>
                  <td>
                    <h5>Crossfit</h5>Adam Phillips
                  </td>
                  <td />
                  <td className="bg-primary text-white">
                    <h5 className="text-white">Power Lifting</h5>James Alien
                  </td>
                  <td />
                  <td>
                    <h5>Cardio</h5>John Deo
                  </td>
                  <td />
                  <td>
                    <h5>Crossfit</h5>Adam Phillips
                  </td>
                </tr>
                <tr>
                  <th className="bg-secondary text-white align-middle">
                    7.00pm - 9.00pm
                  </th>
                  <td />
                  <td>
                    <h5>Cardio</h5>John Deo
                  </td>
                  <td />
                  <td>
                    <h5>Crossfit</h5>Adam Phillips
                  </td>
                  <td />
                  <td className="bg-primary text-white">
                    <h5 className="text-white">Power Lifting</h5>James Alien
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        </>
    )
}
export default Listcourse;