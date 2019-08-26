import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component{
    render(){
        return( 
<div>
        <ul className="nav" ><table>
          
          <tr><td>Start Date</td><td><input type="text" size="6" /></td>
          <td>End Date</td><td><input type="text" size="6" /></td>
          <td>Project Name</td><td><input type="text" size="6" /></td>
          <td>Current Name</td><td><input type="text" size="6" /></td>
          <td>Location</td>
          <td></td>
          </tr>
        </table>
        
        </ul>
      </div>
        );
    }
}

export default Navbar;