import React, { Component } from 'react';
import './projecttask.css';
import TaskNav from '../dashboard/add';
import {Link} from 'react-router-dom';


class ProjectForm extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            tasks: []
        };
        this.taskpop = this.taskpop.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);  
        this.addTask = this.addTask.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.project_name]: e.target.value
    })
}
    taskpop=()=>{
        return(<TaskNav />);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const project_name=this.refs.project_name.value;
        const project_number=this.refs.project_number.value;
        const short_name=this.refs.short_name.value;
        const location=this.refs.location_name.value;
        const start_date =this.refs.start_date.value;
        const fat_date=this.refs.fat_date.value;
        const actual_date=this.refs.actuial_date.value;
        const active_inactive=this.refs.fat_date.value;
        const completed=this.refs.fat_date.value;
    }
    addTask({task}){
        this.setState({tasks: [...this.state.tasks, task]});
    }
        
render(){
       const tasks = [];
       this.state.tasks.forEach(task => {
           tasks.push(<li>{task.name} - {10}%</li>);
       });
        
        return(
            <div className="container">
                <nav className="navbar navbar-expand-sm bg-light justify-content-center">

<center> <h1>Title{this.props.title}</h1> </center>
</nav>
            <form className="ex" onSubmit={this.handleSubmit} method="post">
                <table className="tabledata">
                    <br/>
            <tr>
               <td value="project_number"><b>Project Number</b></td><td><input type="text" ref="project_number"></input></td>
               <td value="project_name"><b>Project Name</b></td><td><input type="text" ref="project_name"></input></td>
            </tr> <br/>
            <tr>
               <td value="short_name"><b>Short Name</b></td><td><input type="text" ref="short_name"></input></td>
               <td value="location"><b>Location</b></td><td><input type="text" ref="location"></input></td>
            </tr> <br/>
            <tr>
               <td value="start_date"><b>start date</b></td><td><input type="text" ref="start_date"></input></td>
               <td value="fat_date"><b>Fat Date</b></td><td><input type="text" ref="fat_date"></input></td>
            </tr> <br/>
            <tr>
               <td value="actual_date"><b>Actual Date</b></td><td><input type="text" ref="actual_date"></input></td>
               <td value="active_inactive"><b>Active/Inactive</b></td><td><input type="text" ref="active_inactive"></input></td>
            </tr> <br/>
            <tr>
               <td value="completed"><b>%completed</b></td><td><input type="text" ref="completed"></input></td>
               <td value="task_completed"><b>Task Entered</b></td>
               <td>
                    <lu className="list-unstyled">
                        {tasks}
                    </lu>
               </td>
            </tr><br/>
            </table>
            
           <Link to={{pathname: '/addProject/addTask', state: {task: "This is test"}}}> <button type="submit" data-toggle="modal" data-target="#myModal" >Add Task</button></Link>
            </form>
            </div>
            
        );
    }
}

export default ProjectForm;