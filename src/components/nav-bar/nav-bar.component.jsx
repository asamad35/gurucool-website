import React from "react";

import logo from '../../assests/images/logo.png'
import './nav-bar.styles.scss'

const Navbar = ()=>{
    return(
        <div className="nav-bar flex">

            <div className="logo">
                <img src={logo} alt="" />
            </div>

        <ul className="nav-links flex">
            <li className="nav-link">Home</li>
            <li className="nav-link">Courses</li>
            <li className="nav-link">About</li>
        </ul>

        <div className="login flex">
            <button className='button login'>Login</button>
            <button className="button">Sign Up</button>
        </div>


        </div>
    )
}
export default Navbar