import React from "react";
import { Link } from "react-router-dom";
import Nav from "../navbar/Nav";

const ListOffers = () => {
    return(
        <>
      <Nav/>
        <br />
        <br />
        <br />
        <br />
        <br />
      <div className="container my-2">
      <h1 className="text-center">List of Offers</h1>
  <Link to="/addoffers" className="btn btn-primary btn-sm mb-3">
  {" "}
    Add Offers{" "}
  </Link>
  </div>
  <div className="card-deck">
  <div className="card">
    <img className="card-img-top" src="img/feature-3.jpg" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Month</h5>
      <p className="card-text">
        Description : This package includes 1 month membership, members can come 
        in the morning or evening.SUNDAY CLOSED!!
      </p>
      <Link to="/updateoffers"  className="btn btn-primary">
                Update
            </Link>
            <br />
            <br />
            <a href="/deleteoffers/1" className="btn btn-danger">
            Delete
          </a>
      {/* <p className="card-text">
        <small className="text-muted">Last updated 3 mins ago</small>
      </p> */}
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="img/feature-4.jpg" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Quater</h5>
      <p className="card-text">
        Description : This package includes 3 month membership, members can come 
        in the morning or evening. SUNDAY CLOSED!!
      </p>
      <Link to="/updateoffers"  className="btn btn-primary">
                Update
            </Link>
            <br />
            <br />
            <a href="/deleteoffers/1" className="btn btn-danger">
            Delete
          </a>
     
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="img/feature-2.jpg" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Semi-Annual</h5>
      <p className="card-text">
        Description : This package includes 6 month's membership, members can come
        in the morning or evening. SUNDAY CLOSED!!
      </p>
      <Link to="/updateoffers"  className="btn btn-primary">
                Update
            </Link>
            <br />
            <br />
            <a href="/deleteoffers/1" className="btn btn-danger">
            Delete
          </a>
    
    </div>
  </div>
</div>


        </>
    )
}
export default ListOffers;