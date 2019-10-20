import React from 'react';
import './adminpage.css';
import fold from '../folfol.png';
import pro from '../ms-project.png';
import login from '../new_login.png';
import dash from '../monitor.png';
import {Link} from 'react-router-dom';
import Acces from '../user_access.png';
import AP from '../addp.png';



function Admin(props){
        return(
<div className="container-fluid">
    <nav className="navbar navbar-expand-sm bg-light justify-content-center">
        <h1>Home Page</h1>

    </nav>
    <br/>
    <div className="row">
        <Link to="./access" className="col-sm-3" ><button hidden={!props.admin}><img src={Acces}></img><h3>User Access</h3></button></Link>
        <p className="col-sm-1"></p>       
        <Link to="./manage"  className="col-sm-3"><button hidden={!props.admin}><img src={login}></img><h3>Manage User</h3></button></Link>
        <p className="col-sm-1"></p>  
        <Link to="./addProject" className="col-sm-3"><button hidden={!props.data_entry}><img  src={AP}></img><h3>Add Project</h3></button></Link>
    </div>
    <br />
    <div>
        <Link to="./home"><button  className="col-sm-3"><img  src={dash}></img><h3>View Dashboard</h3></button></Link>
    </div>
<br/>
<br/>
<div className="">
<Link to ='/details'><button type="submit" className="btn btn-primary" >Profile</button></Link>
<button type="submit" className="btn btn-primary" onClick={props.logOut}> LogOut</button>
</div>
</div>

    );
}
export default Admin;