import React from 'react';
import './navbar.css';

function Navbar(props){
  let start_date = new Date(props.start_date);
  let end_date = new Date(props.end_date);
    return( 
<div className="container-fluid">
  <nav className="navbar navbar-expand-sm  justify-content-center">
    <ul className="nav navbar-nav ulll" >
      <table className="tabledata table-responsive"><tbody>
      <tr>
      <td><div className="ml-4" style={{cursor: 'pointer'}} onClick={() => props.goBack()}>
        <span className="fas fa-arrow-left fa-lg"></span>
      </div></td><td><b>Project Name</b></td><td><span>{props.project_name}</span></td>
      <td><b>Start Date</b></td><td><span>{start_date.toDateString().slice(4)}</span> </td>
      <td><b>End Date</b></td><td><span>{end_date.toDateString().slice(4)}</span></td>
      
      <td><b>Location</b></td><td><span>{props.location}</span></td>
      <td><button type="submit" className="btn btn-primary" onClick={props.logOut}> Log Out</button></td>
      
      </tr>
      </tbody>
    </table>
    
    </ul>
    </nav>
  </div>
    );
}

export default Navbar;