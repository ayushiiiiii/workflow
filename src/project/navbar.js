import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
function Navbar(props){
  let start_date = new Date(props.start_date);
  let end_date = new Date(props.end_date);
    return( 
<div className="container-fluid">
  <nav className="navbar navbar-fixed-top navbar-expand-sm bg-light justify-content-center">
    <ul className="nav navbar-nav ulll" ><table className="tabledata table-responsive"><tbody>
    <tr><td><b>Project Name</b></td><td><span>{props.project_name}</span></td>
      <td><b>Start Date</b></td><td><span>{start_date.toDateString().slice(4)}</span> </td>
      <td><b>End Date</b></td><td><span>{end_date.toDateString().slice(4)}</span></td>
      
      <td><b>Location</b></td><td><span>{props.location}</span></td>
      
      </tr>
      </tbody>
    </table>
    
    </ul>
    </nav>
  </div>
    );
}

export default Navbar;