import React, { Component } from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
class Navbar extends Component{
    render(){
        return( 
<div>
        <ul className="nav" ><table>
          
          <tr><td>Start Date</td><td><span></span> </td>
          <td>End Date</td><td><span></span></td>
          <td>Project Name</td><td><span></span></td>
          <td>Current Name</td><td><span></span></td>
          <td>Location</td>
          
          </tr>
        </table>
        
        </ul>
      </div>
        );
    }
}

export default Navbar;