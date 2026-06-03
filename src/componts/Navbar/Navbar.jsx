import React from 'react'
import logo from '../../Assests/Images/logo67.jpg'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  yassin ">
  <div className=" container orachimaro ">
    <Link to="/home" className="navbar-brand w-25">
  <img src={logo} alt="Logo" className=" w-75   tusandy" />
</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarNav">
      <ul className="navbar-nav ms-auto text-white fw-bold  hyper ">
        <li className="nav-item">
        <Link className="nav-link text-white " to={'/home'} >Home</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link text-white " to={'/about'} >  About</Link>
        </li>
        <li className="nav-item">
         <Link  className="nav-link text-white " to={'/portfilio'}>My Work</Link>
        </li>
        <li className="nav-item">
         <Link  className="nav-link text-white " to={'/contact'}>Contact</Link>
        </li>
        
      </ul>
    </div>
  </div>
  
</nav>
    </>
  )
}
