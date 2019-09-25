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
            actual_start: this.refs.actual_start.value,
            actual_end_date: this.refs.actual_end_date.value,
            members: this.state.members
        }
        this.props.addTask({task: task});
       
    }
    addMembers(e){
        e.preventDefault();
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.refs.member.value))) return;
        this.setState({members: [this.refs.member.value, ...this.state.members]});
        this.refs.member.value='';
    }
    removeMembers(member){
        let arr = [...this.state.members];
        arr.splice(this.state.members.indexOf(member),1);
        this.setState({members: arr});
    }
    
    render()
    {       if(!this.state.addMembers){
                let members = [];
                const returnMembers = () => {
                    for(let i=0;i<this.state.members.length;i++){
                        members.push(<li key={i}>{this.state.members[i]} <span className="btn btn-danger btn-sm rounded-circle" onClick={() => this.removeMembers(this.state.members[i])}>&#x2715;</span></li>);
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
                            <tr><td value="major_tasks">Major Tasks </td><td><select ref="major_task" required>
                            <option value="Mechanical Design" selected>Mechanical Design</option>
                            <option value="Electrical Design">Electrical Design</option>
                            <option value="Mechanical Parts Ordering">Mechanical Parts Ordering</option>

                            <option value="Mechanical assy" >Mechanical assy</option>
                            <option value="Electrical assy" selected>Electrical assy</option>
                            <option value="Total Assembly">Total Assembly</option>
                            <option value="Programming">Programming</option>
                            <option value="Testing & internal trial" >Testing & internal trial</option>
                            <option value="FAT & review point">FAT & review point</option>
                            <option value="Installation Commissioning">Installation Commissioning</option>
                            <option value="Handover and closure">Handover and closure</option>
                         </select></td><td>    </td>
                          <td value="weightage">Weightage </td><td><input type="text" ref="weightage" required></input></td></tr><br/>
                           <tr><td value="start_date">Start date(planned)</td><td><input type="date" ref="start_date" required></input></td><td>  </td>
                            <td value="end_date">End date(planned)</td><td><input type="date" ref="end_date" required></input></td></tr><br/>
                            <tr><td value="duration">Scheduled duration(days) </td><td><input type="text" ref="duration" required></input></td><td> </td>
                           <td value="actual_start">actual start Date</td><td><input type="date" ref="actual_start" required></input></td></tr><br/>
                           <tr><td value="review_date">Review Date</td><td><input type="date" ref="review_date" required></input></td>
                            <td value="actual_end_date">Actual end date</td><td><input type="date" ref="actual_end_date" required></input></td><td> </td></tr><br/>
                            <tr><td value="actual_weightage">Add Members</td><td><input type="email" ref="member" className="form-control"></input></td><td><a href={void(0)} src={Ad} className="btn btn-primary glyphicon glyphicon-plus-sign" data-toggle="modal" data-target="#myModal"  onClick={this.addMembers}><img src={Ad}></img>Add</a></td>
                            <td>
                                {returnMembers() }
                                </td></tr><br/>
                        </tbody>
                    </table>
                    <br/>
                    <button type="submit">Add</button>
                    <button className="btn btn-danger" onClick={() => this.props.cancelAddTask()}>Cancel</button>
                </form>
            </div>


        );
        }
    }
}

export default TaskForm;
