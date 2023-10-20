import React from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
const Classes = () => {
    return(
        <>
        <Navbar/>
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
  {/* Gym Class Start */}
  <div className="container gym-class mb-5" style={{ marginTop: 90 }}>
    <div className="row px-3">
      <div className="col-md-6 p-0">
        <div className="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
          <i className="flaticon-six-pack" />
          <h3 className="display-4 mb-3 text-white font-weight-bold">
            Body Building
          </h3>
          <p>
          Is a sport or activity that involves rigorous exercise 
          and weight training to develop and sculpt muscles for aesthetic purposes.
          </p>
          {/* <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">
            Join Now
          </a> */}
          {/* <Link className="btn btn-lg btn-outline-light mt-4 px-4" to="/join now">Join Now</Link> */}
        </div>
      </div>
      <div className="col-md-6 p-0">
        <div className="gym-class-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
          <i className="flaticon-bodybuilding" />
          <h3 className="display-4 mb-3 text-white font-weight-bold">
            Muscle Building
          </h3>
          <p>
          Refers to the process of increasing muscle mass through exercise, 
          nutrition, and rest.
          </p>
          {/* <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">
            Join Now
          </a> */}
          {/* <Link className="btn btn-lg btn-outline-light mt-4 px-4" to="/join now">Join Now</Link> */}
        </div>
      </div>
    </div>
  </div>
  {/* Gym Class End */}
  {/* Class Timetable Start */}
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
  {/* Class Timetable End */}
  {/* BMI Calculation Start */}
  <div
    className="container-fluid position-relative bmi mt-5"
    style={{ marginBottom: 90 }}
  >
    <div className="container">
      <div className="row px-3 align-items-center">
        <div className="col-md-6">
          <div className="pr-md-3 d-none d-md-block">
            <h4 className="text-primary">Body Mass Index </h4>
            <h4 className="display-4 text-white font-weight-bold mb-4">
              Whate is BMI?
            </h4>
            <p className="m-0 text-white">
            BMI stands for Body Mass Index, a numerical value calculated from weight and height
            to assess a person's body weight status.
            </p>
          </div>
        </div>
        <div className="col-md-6 bg-secondary py-5">
          <div className="py-5 px-3">
            <h1 className="mb-4 text-white">Calculate your BMI</h1>
            <form>
              <div className="form-row">
                <div className="col form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg bg-dark text-white"
                    placeholder="Weight (KG)"
                  />
                </div>
                <div className="col form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg bg-dark text-white"
                    placeholder="Height (CM)"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg bg-dark text-white"
                    placeholder="Age"
                  />
                </div>
                <div className="col form-group">
                  <select className="custom-select custom-select-lg bg-dark text-muted">
                    <option>Gender</option>
                    <option>Mal</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <input
                    type="button"
                    className="btn btn-lg btn-block btn-dark border-light"
                    defaultValue="Calculate Now"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* BMI Calculation End */}
  <Footer/>
</>
    )

};
export default Classes;