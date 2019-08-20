import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component{
    render(){
        return( 
<div>
        <ul className="nav">
          <li className="nav-item slam-left">Start Date <input type="text" size="6" /></li>
          <li className="nav-item">End date <input type="text"  size="6"/></li>
          <li className="nav-item">Project_Name <input type="text"  size="6" /></li>
          <li className="nav-item">Current_Name <input type="text"  size="6" /></li>
          <li className="nav-item"> Location</li>
        </ul>
      </div>
        );
    }
}

export default Navbar;