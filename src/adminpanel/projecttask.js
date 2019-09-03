import React, { Component } from 'react';
import './projecttask.css';
import TaskNav from '../dashboard/add';
import {Link} from 'react-router-dom';
import Formm from './excel';


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
        const project_name=this.refs.project_name.value;
        const project_number=this.refs.project_number.value;
        const short_name=this.refs.short_name.value;
        const location=this.refs.location.value;
        const start_date =this.refs.start_date.value;
        const fat_date=this.refs.fat_date.value;
        const actual_date=this.refs.actual_date.value;
        const active_inactive=this.refs.fat_date.value;
        const completed=this.refs.fat_date.value;
    }
    addTask({task}){
        this.setState({tasks: [...this.state.tasks, task], addTask: false});
    }
    removeTask(task){
        let arr = [...this.state.tasks];
        arr.splice(this.state.tasks.indexOf(task),1);
        this.setState({tasks: arr});
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
    </nav>
                <form className="ex" onSubmit={this.handleSubmit} method="post">
                    <table className="tabledata">
                    <tbody>
                <tr>
                <td value="project_number"><b>Project Number</b></td><td><input type="text" ref="project_number"></input></td>
                <td value="project_name"><b>Project Name</b></td><td><input type="text" ref="project_name"></input></td>
                </tr> 
                <tr>
                <td value="short_name"><b>Short Name</b></td><td><input type="text" ref="short_name"></input></td>
                <td value="location"><b>Location</b></td><td><input type="text" ref="location"></input></td>
                </tr> 
                <tr>
                <td value="start_date"><b>start date</b></td><td><input type="date" ref="start_date"></input></td>
                <td value="fat_date"><b>Fat Date</b></td><td><input type="date" ref="fat_date"></input></td>
                </tr> 
                <tr>
                <td value="actual_date"><b>Actual Date</b></td><td><input type="date" ref="actual_date"></input></td>
                <td value="active_inactive"><b>Active/Inactive</b></td><td><input type="text" ref="active_inactive"></input></td>
                </tr> 
                <tr>
                <td value="completed"><b>%completed</b></td><td><input type="text" ref="completed"></input></td>
                <td value="task_completed"><b>Task Entered</b></td>
                <td>
                    {returnTasks()}
                </td>
                </tr>
                </tbody>
                </table>
                
            <button type="submit" data-toggle="modal" data-target="#myModal" onClick={() => this.setState({addTask: true})}>Add Task</button>
                </form>
                </div>
                
            );
        }else{
            return(<Formm addTask={this.addTask} />)
        }
    }
}

export default ProjectForm;