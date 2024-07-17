import React from 'react';
import {Link} from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5"> {/* bg-primary is blue color navbar*/}
    <div className="container-fluid">
      
      <Link className="navbar-brand" to={"/"}>Home</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={"/view-bookings"}>View all Package</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to={"/add-bookings"}>Add new Package</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link active" to={"/add-places"}>Add Visit Places</Link>
          </li>

          
         
        </ul>
      </div>
    </div>
  </nav>
  )
}


export default NavBar