import React from "react";
import './Navbar.css';
import logo from '../../Assets/graviti_logo.png';
function Navbar(){
    return(
        <React.Fragment>
            <nav className="navbar-class">
                <img src={logo} className="logo-class" alt="logo"></img>
                <h2 className="heading-class">Graviti</h2>
            </nav>
        </React.Fragment>
    );
}
export default Navbar;