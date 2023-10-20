import React from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/CustomNavbar";
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





 {/* BMI Calculation Start */}
 <div className="container-fluid position-relative bmi mt-5" style={{ marginBottom: 90 }}>
    
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

<Footer/>
</>
    )

};
export default BMI;