import React, { Component } from 'react';
import './projecttask.css';
import TaskNav from '../dashboard/add';


class ProjectForm extends Component{
    constructor()
    {
        super();
        this.taskpop = this.taskpop.bind(this);   
    }
    taskpop=()=>{
        return(<TaskNav />);
    }
    
render(){
       const tasks = [];
        
        return(
            <div className="container">
                <nav className="navbar navbar-expand-sm bg-light justify-content-center">

<center> <h1>Title{this.props.title}</h1> </center>
</nav>
            <form className="ex">
                <table className="tabledata">
                    <br/>
            <tr>
               <td><b>Project Number</b></td><td><input type="text"></input></td>
               <td><b>Project Name</b></td><td><input type="text"></input></td>
            </tr> <br/>
            <tr>
               <td><b>Short Name</b></td><td><input type="text"></input></td>
               <td><b>Location</b></td><td><input type="text"></input></td>
            </tr> <br/>
            <tr>
               <td><b>start date</b></td><td><input type="text"></input></td>
               <td><b>Fat Date</b></td><td><input type="text"></input></td>
            </tr> <br/>
            <tr>
               <td><b>Actual Date</b></td><td><input type="text"></input></td>
               <td><b>Active/Inactive</b></td><td><input type="text"></input></td>
            </tr> <br/>
            <tr>
               <td><b>%completed</b></td><td><input type="text"></input></td>
            </tr><br/>
            </table>
            
            <button type="submit" data-toggle="modal" data-target="#myModal" >Add Task</button>
            </form>
            </div>
        );
    }
}

export default ProjectForm;