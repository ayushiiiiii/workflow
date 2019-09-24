import React, {Component } from 'react';
import './excel.css';
import Ad from '../pluss.png';


class TaskForm extends Component{
    constructor(props){
        
        super(props);
        this.state={
        members: []
    }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addMembers = this.addMembers.bind(this);
    }
    onChange(e){
            this.setState({
                [e.target.project_name]: e.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            name: this.refs.major_task.value,
            weightage: this.refs.weightage.value,
            start_date: this.refs.start_date.value,
            end_date: this.refs.end_date.value,
            completion: this.refs.completion.value,
            actual_start: this.refs.actual_start.value,
            actual_end_date: this.refs.actual_end_date.value,
            members: this.state.members
        }
        this.props.addTask({task: task});
       
    }
    addMembers(e){
        e.preventDefault();
        this.setState({members: [this.refs.member.value, ...this.state.members]});
        this.refs.member.value='';
    }
    
    render()
    {       if(!this.state.addMembers){
                let members = [];
                const returnMembers = () => {
                    for(let i=0;i<this.state.members.length;i++){
                        members.push(<li key={i}>{this.state.members[i].member} <span className="btn btn-danger btn-sm rounded-circle" onClick={() => this.removeTask(this.state.tasks[i])}>&#x2715;</span></li>);
                    }
                    return members;
                }
        

        return(
            <div className="container" > <nav className="navbar navbar-expand-sm bg-light justify-content-center">

            <center> <h1>Title{this.props.title}</h1> </center>
            </nav><br/>
    
            <form className="ex dis form-group" onSubmit={this.handleSubmit} method="post">
                <table className="tabledata">
                    <tbody>
                    <br/>
                            <tr><td value="major_tasks">Major Tasks </td><td><input type="text" ref="major_task" required></input></td><td>    </td>
                          <td value="weightage">Weightage </td><td><input type="text" ref="weightage" required></input></td></tr><br/>
                           <tr><td value="start_date">Start date(planned)</td><td><input type="date" ref="start_date" required></input></td><td>  </td>
                            <td value="end_date">End date(planned)</td><td><input type="date" ref="end_date" required></input></td></tr><br/>
                            <tr><td value="duration">Scheduled duration(days) </td><td><input type="text" ref="duration" required></input></td><td> </td>
                           <td value="actual_start">actual start Date</td><td><input type="date" ref="actual_start" required></input></td></tr><br/>
                           <tr><td value="completion">Y% completion</td><td><input type="text" ref="completion" required></input></td><td> </td>
                            <td value="review_date">Review Date</td><td><input type="date" ref="review_date" required></input></td></tr><br/>
                            <tr><td value="actual_end_date">Actual end date</td><td><input type="date" ref="actual_end_date" required></input></td><td> </td>
                            <td value="actual_weightage">Add Members</td><td><input type="email" ref="member" className="form-control"></input></td><td><a href={void(0)} src={Ad} className="btn btn-primary glyphicon glyphicon-plus-sign" data-toggle="modal" data-target="#myModal"  Onclick={this.addMembers}><img src={Ad}></img>Add</a></td></tr><br/>
                        </tbody>
                    </table>
                    <br/>
                    <button type="submit">Add</button>
                </form>
            </div>


        );
        }
    }
}

export default TaskForm;
