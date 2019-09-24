import React, { Component } from 'react';
import './projecttask.css';
import TaskNav from '../dashboard/add';
import {Link} from 'react-router-dom';
import Formm from './excel';
import Ad from '../pluss.png';


class ProjectForm extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            addTask: false,
            tasks: []
        };
        this.taskpop = this.taskpop.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);  
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
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
        var project={
            name:this.refs.project_name.value,
            mdsno: this.refs.project_number.value,
            short_name:this.refs.short_name.value,
            location: this.refs.location.value,
            machine:this.refs.machine.value,
            start_date :this.refs.start_date.value,
            fat_date:this.refs.fat_date.value,
            actual_end:this.refs.actual_date.value,
            active: (this.refs.fat_date.value=="true"?true:false),
            tasks: this.state.tasks
        }
        this.props.postProject({project: project});
    }
    addTask({task}){
        this.setState({tasks: [...this.state.tasks, task], addTask: false});
    }
    removeTask(task){
        let arr = [...this.state.tasks];
        arr.splice(this.state.tasks.indexOf(task),1);
        this.setState({tasks: arr});
    }
        
    removeField(){
            this.refs.project_name.value=''
            this.refs.project_number.value=''
            this.refs.short_name.value=''
            this.refs.location.value=''
            this.refs.machine.value=''
            this.refs.start_date.value=''
            this.refs.fat_date.value=''
            this.refs.actual_date.value=''
            this.refs.fat_date.value=''
            this.state.tasks=''
    }
render(){
        if(!this.state.addTask){
            let tasks = [];
            const returnTasks = () => {
                for(let i=0;i<this.state.tasks.length;i++){
                    tasks.push(<li key={i}>{this.state.tasks[i].name} - {this.state.tasks[i].weightage}% <span className="btn btn-danger btn-sm rounded-circle" onClick={() => this.removeTask(this.state.tasks[i])}>&#x2715;</span></li>);
                }
                return tasks;
            }
            
            return(
                <div className="container">
                    <nav className="navbar navbar-expand-sm bg-light justify-content-center">

    <center> <h1>Title{this.props.title}</h1> </center>
    </nav><br/>
                <form className="dis ex form-group" onSubmit={this.handleSubmit} method="post">
                    <table className="tabledata ">
                    <tbody>
                        <br/>
                <tr>
                <td value="project_number" className="control-label "><b>Project Number</b></td><td><input type="text" ref="project_number" required></input></td>
                <td value="project_name" className="control-label "><b>Project Name</b></td><td><input type="text" ref="project_name" required></input></td>
                </tr> <br/>
                <tr>
                <td value="short_name" className="control-label" ><b>Short Name</b></td><td><input type="text" ref="short_name" required></input></td>
                <td value="location"  className="control-label"><b>Location</b></td><td><input type="text" ref="location" required></input></td>
                </tr> <br/>
                <tr>
                <td value="start_date"  className="control-label"><b>start date</b></td><td><input type="date" ref="start_date" required></input></td>
                <td value="fat_date"  className="control-label"><b>Fat Date</b></td><td><input type="date" ref="fat_date" required></input></td>
                </tr> <br/>
                <tr>
                <td value="actual_date"  className="control-label"><b>Actual Date</b></td><td><input type="date" ref="actual_date" required></input></td>
                <td value="active_inactive"  className="control-label"><b>Active/Inactive</b></td><td><select className="dropdown" required>
                            <option value="true" selected>Active</option>
                            <option value="false">Inactive</option></select ></td> 
                </tr> <br/>
               
                <tr>
                <td value="machine" className="control-label"><b>Machine</b></td><td><input type="text" ref="machine" required></input></td>
                <td value="task_completed"><b>Add Task </b><button type="button" src={Ad} className="glyphicon glyphicon-plus-sign" data-toggle="modal" data-target="#myModal" onClick={() => this.setState({addTask: true})}><img src={Ad}></img></button>
 </td>
                <td>
                    {returnTasks()}
                </td>
                </tr><br/>
                </tbody>
                </table>
                
                  <button type="submit">Submit</button>
                </form>
                </div>
                
            );
        }else{
            return(<Formm addTask={this.addTask} />)
        }
    }
}

export default ProjectForm;