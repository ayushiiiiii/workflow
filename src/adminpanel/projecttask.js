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
            name: '',
            mdsno: '',
            short_name: '',
            location: '',
            machine: '',
            start_date: '',
            fat_date: '',
            actual_end: '',
            active: false,
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
    cancelAddTask(){
        this.setState({addTask: false});
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
                <form className="container ex form-group" onSubmit={this.handleSubmit} method="post">
                        <br/>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="project_number" className="control-label "><h5><b>Project Number</b></h5></label>
                            <input type="text" ref="project_number" value={this.state.mdsno} onChange={e => this.setState({mdsno: e.target.value})} required></input></div>
                        <div className="col">
                            <label  htmlFor="project_name" className="control-label "><h5><b>Project Name</b></h5></label>
                            <input type="text" ref="project_name" value={this.state.name} onChange={e => this.setState({name: e.target.value})} required></input>
                </div></div> <br/>
               <div className="row">
                    <div className="col">
                        <label htmlFor="short_name" className="control-label" ><h5><b>Short Name</b></h5></label>
                        <input type="text" ref="short_name" value={this.state.short_name} onChange={e => this.setState({short_name: e.target.value})} required></input></div>
                    <div className="col">
                        <label htmlFor="location"  className="control-label"><h5><b>Location</b></h5></label>
                        <input type="text" ref="location" value={this.state.location} onChange={e => this.setState({location: e.target.value})} required></input>
               </div></div> <br/>
                <div className="row">
                    <div className="col">   
                        <label htmlFor="start_date"  className="control-label"><h5><b>start date</b></h5></label>
                        <input type="date" ref="start_date" value={this.state.start_date} onChange={e => this.setState({start_date: e.target.value})} required></input></div>
                    <div className="col">
                        <label htmlFor="fat_date"  className="control-label"><h5><b>Fat Date</b></h5></label>
                        <input type="date" ref="fat_date" value={this.state.fat_date} onChange={e => this.setState({fat_date: e.target.value})} required></input>
                    </div></div> <br/>
                <div className="row">
                        <div className="col">
                            <label htmlFor="actual_date"  className="control-label"><h5><b>Actual Date</b></h5></label>
                            <input type="date" ref="actual_date" value={this.state.actual_date} onChange={e => this.setState({actual_date: e.target.value})} required></input></div>
                        <div className="col">
                            <label htmlFor="active_inactive"  className="control-label"><h5><b>Active/Inactive</b></h5></label>
                            <select className="dropdown" value={this.state.active?"true":"false"} onChange={e => this.setState({active: (e.target.value==="true"?true:false)})} defaultValue="Active" required>
                            <option value="true" >Active</option>
                            <option value="false">Inactive</option></select ></div>
               </div><br/>
               <div className="row">
                    <div className="col">
                        <label htmlFor="machine" className="control-label"><h5><b>Machine</b></h5></label>
                        <input type="text" ref="machine" required></input></div>
                    <div className="col">
                        <label htmlFor="task_completed"><h5><b>Add Task </b></h5><button type="button" src={Ad} className="glyphicon glyphicon-plus-sign" data-toggle="modal" data-target="#myModal" onClick={() => this.setState({addTask: true})}><img src={Ad}></img></button>
                      </label></div></div>
                <div className="row">
                    <div className="col">
                            {returnTasks()}
                </div></div><br/>
                
                  <button type="submit">Submit</button>
                </form>
                </div>
                
            );
        }else{
            return(<Formm addTask={this.addTask} cancelAddTask={this.cancelAddTask.bind(this)} />)
        }
    }
}

export default ProjectForm;