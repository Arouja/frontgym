import React from "react";
import { Link } from "react-router-dom";
import CustomNavbar from "../navbar/CustomNavbar";

const Listtrainer = () => {
    return(
        <>
        <CustomNavbar />
        <br />
        <br />
        <br />
        
        <div className="container my-2">
  <h1 className="text-center">List of Trainer</h1>
  <Link to="/addtrainer" className="btn btn-primary btn-sm mb-3">
  {" "}
    Add Trainer{" "}
  </Link>
  {/* <a href="/showNewEmployeeForm" className="btn btn-primary btn-sm mb-3">
    {" "}
    Add Trainer{" "}
  </a> */}
  <table border={1} className="table table-striped table-responsive-md">
    <thead>
      <tr>
        <th>
        Trainer First Name
          {/* <a href="/page/${currentPage}?sortField=firstName&sortDir=${reverseSortDir}">
            Trainer First Name
          </a> */}
        </th>
        <th>
        Trainer Last Name
          {/* <a href="/page/${currentPage}?sortField=lastName&sortDir=${reverseSortDir}">
            Trainer Last Name
          </a> */}
        </th>
        <th>
        Trainer speciality
          {/* <a href="/page/${currentPage}?sortField=email&sortDir=${reverseSortDir}">
            Trainer speciality
          </a> */}
        </th>
        <th> Actions </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        {/* Replace this part with actual employee data */}

        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
        <td>
            <Link to="/updatetrainer"  className="btn btn-primary">
                Update
            </Link>
          {/* <a href="/showFormForUpdate/1" className="btn btn-primary">
            Update
          </a> */}
          <a href="/deletetrainer/1" className="btn btn-danger">
            Delete
          </a>
        </td>
      </tr>
    </tbody>
  </table>
  </div>

  </>
        
//         <>
        
//          <div className="container">
//   <h2 className="text-center">List of Trainers</h2>
//   {/* <button className="btn btn-primary mb-2" id="addCustomer">
//     Add Customer
//   </button> */}
//   <table className="table table-striped table-bordered">
//     <thead>
//       <tr>
//         <th>Trainer Id</th>
//         <th>Trainer First Name</th>
//         <th>Trainer Last Name</th>
//         <th>Trainer Speciality</th>
//         <th>Actions</th>
//       </tr>
//     </thead>
//     <tbody id="customerTableBody">
//       {/* Customer data will be dynamically added here */}
//     </tbody>
//   </table>
// </div>

//         </>


    )
}
export default Listtrainer;