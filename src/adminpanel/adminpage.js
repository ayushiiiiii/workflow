import React,{Component} from 'react';
import './adminpage.css';
import fold from '../folfol.png';
import pro from '../ms-project.png';
import login from '../new_login.png';
import dash from '../monitor.png';
import {Link} from 'react-router-dom';



class Admin extends Component{
    render(){
        return(
<div className="container-fluid">
    <nav className="navbar navbar-expand-sm bg-light justify-content-center">
        <h1>Admin Page</h1>

    </nav>
    <br/>
    <div className="row">
        <Link to="./app" className="col-sm-3" ><button><img src={fold}></img><h3>Add folder</h3></button></Link>
        <p className="col-sm-1"></p>       
        <Link to="./signup"  className="col-sm-3"><button><img src={login}></img><h3>Add User</h3></button></Link>
        <p className="col-sm-1"></p>  
        <Link to="./addProject" className="col-sm-3"><button ><img  src={fold}></img><h3>Add Project</h3></button></Link>
    </div>
    <br />
    <div>
        <Link to="./home"><button  className="col-sm-3"><img  src={dash}></img><h3>View Dashboard</h3></button></Link>
    </div>


</div>

        );
    }
}
export default Admin;