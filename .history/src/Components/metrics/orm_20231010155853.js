import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomNavbar from "../navbar/CustomNavbar";

import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";


import Footer from "../footer/footer";

import {
  MDBContainer,
  
} from 'mdb-react-ui-kit';

const Orm = () => {
  const [profile, setProfile] = useState(null);
 

  
  const calculateOrm = (weight, height) => {
    axios.post('http://localhost:8089/api/v1/fitness-metrics/calculate-orm', {
      weight: weight,
      height: height
    })
    .then((response) => {
      const orm = response.data.orm; // Assuming your backend returns the orm
      console.log('ORM:', orm);
      // Do something with the orm, like updating state or displaying it to the user
    })
    .catch((error) => {
      console.error('Error calculating orm:', error);
    });
  };    
  
  
  const [ormResult, setOrmResult] = useState(null);

  const handleCalculateORM = () => {
  const weight = parseFloat(document.getElementById('weightInput').value);
  const height = parseFloat(document.getElementById('heightInput').value);

  if (!isNaN(weight) && !isNaN(height)) {
    const orm = (weight / (height / 100) ** 2).toFixed(2);
    setOrmResult(orm);
  }
};

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios.get(`http://localhost:8089/api/v1/users/getuserbytoken/${token}`)
        .then((response) => {
          setProfile(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching profile:', error);
        }); 
    }
  }, []);

  

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <>
    
    <div style={{ display: 'flex' }}> 
    
      <CustomNavbar profilePath={profile && profile.path} />
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

        
        <MDBContainer className="py-4" style={{ backgroundColor: 'rgba(24,29,43,255)'}} >
          
 {/* orm Calculation Start */}
 <div className="container-fluid position-relative orm mt-5" style={{ marginBottom: 90 }}>
    
    <div className="container">
      <div className="row px-3 align-items-center">
        <div className="col-md-6">
          <div className="pr-md-3 d-none d-md-block">
            <h4 className="text-primary">Body Mass Index </h4>
            <h4 className="display-4 text-white font-weight-bold mb-4">
              Whate is ORM?
            </h4>
            <p className="m-0 text-white">
            Orm stands for Body Mass Index, a numerical value calculated from weight and height
            to assess a person's body weight status.
            </p>
          </div>
        </div>
        <div className="col-md-6 bg-secondary py-5">
          <div className="py-5 px-3">
            <h1 className="mb-4 text-white">Calculate your Orm</h1>
            <form>
              <div className="form-row">
                <div className="col form-group">
                <input
  type="text"
  id="weightInput"
  className="form-control form-control-lg bg-dark text-white"
  placeholder="Weight (KG)"
/>
                </div>
                <div className="col form-group">
                <input
  type="text"
  id="heightInput"
  className="form-control form-control-lg bg-dark text-white"
  placeholder="Height (CM)"
/>
                </div>
              </div>
              <div className="form-row">
               
                
              </div>
              <div className="form-row">
              <div className="col">
  <input
    type="button"
    className="btn btn-lg btn-block btn-dark border-light"
    value="Calculate Now"
    onClick={handleCalculateORM}
  />
</div>
{ormResult && (
  <div className="mt-3 text-white">
    <h3>Your ORM is: {ormResult}</h3>
  </div>
)}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   </div>
   

 
   {/* orm Calculation End */}
        </MDBContainer>
        </div>
      </section>
      
      
     
     </div>
     </div>
      <Footer />
    </>
  );
};

export default Orm;
