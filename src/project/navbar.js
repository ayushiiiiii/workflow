import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
function Navbar(props){
    return( 
<div>
    <ul className="nav" ><table className="tabledata"><tbody>
    <tr><td><b>Project Name</b></td><td><span>{props.project_name}</span></td>
      <td><b>Start Date</b></td><td><span>{props.start_date}</span> </td>
      <td><b>End Date</b></td><td><span>{props.end_date}</span></td>
      
      <td><b>Location</b></td><td><span>{props.location}</span></td>
      
      </tr>
      </tbody>
    </table>
    
    </ul>
  </div>
    );
}

export default Navbar;