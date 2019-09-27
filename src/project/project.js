import React, { Component } from 'react';
import './project.css';
import { Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Ad from '../pluss.png';

function formatDate(date) {
    var d=new Date(date), month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

class Project extends Component{
    constructor(props){
        super(props);
        this.state={
            weightage: this.props.task.weightage,
            start_date: (this.props.task.start_date==null?null:formatDate(this.props.task.start_date)),
            end_date: (this.props.task.end_date==null?null:formatDate(this.props.task.end_date)),
            actual_start: (this.props.task.actual_start==null?null:formatDate(this.props.task.actual_start)),
            actual_end: (this.props.task.actual_end==null?null:formatDate(this.props.task.actual_end)),
            members: this.props.task.members.map(member => member.username),
            disable: true
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
        this.addMembers=this.addMembers.bind(this);
        this.removeMembers=this.removeMembers.bind(this);
    }

    onChange(field){
        this.setState({[field]: this.refs[field+this.props.task._id].value, disable: false})
    }
    handleSubmit(){
        this.props.editTask(this.props.projectId, this.props.task._id, {
            weightage: this.state.weightage,
            start_date: this.props.task.start_date,
            end_date: this.props.task.end_date,
            actual_start: this.props.task.actual_start,
            actual_end: this.props.task.actual_end
        }, this.state.members);
    }
    addMembers(e){
        e.preventDefault();
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.refs["member"+this.props.task._id].value))) return;
        this.setState({members: [this.refs["member"+this.props.task._id].value, ...this.state.members], disable: false});
        this.refs["member"+this.props.task._id].value='';
    }
    removeMembers(member){
        let arr = [...this.state.members];
        arr.splice(this.state.members.indexOf(member),1);
        this.setState({members: arr, disable: false});
    }
    
    render(){
        let start_date = new Date(this.props.task.start_date);
        let actual_end_date = new Date(this.props.task.actual_end_date);
        let viewMembers = [];
        for(let i=0;i<this.state.members.length;i++){
            viewMembers.push(<li key={i}>{this.state.members[i]} <span className="btn btn-danger btn-sm rounded-circle" onClick={() => this.removeMembers(this.state.members[i])}>&#x2715;</span></li>);
        }
        return(
        <div className="col-12 col-sm-6 col-md-3">
            <div className="card project text-center">
                <div className="card-header">
                    <h4 className="card-title">{this.props.task.name} </h4>
                </div>
                <div className="card-body">
                <br/>
<center><table className="table-responsive table table-striped text-center ">
                            <tbody>
                            <tr>
                                <th>Start</th>
                                <th>Target</th>
                                <th>Actual</th>
                            </tr>
                            <tr>
                                <td><span>{start_date.toDateString().slice(4)}</span></td>
                                <td><span>{this.props.task.expected_completion}</span></td>
                                <td><span>{actual_end_date.toDateString().slice(4)}</span></td>
                            </tr>
                            <tr>
                                <td>Date </td>
                                <td>Days</td>
                                <td>Days</td>
                            </tr>
                            </tbody>
                        </table></center>
                        <div className="col-6">
                        <CircularProgressbar value={this.props.task.completion} text={`${this.props.task.completion}%`} />
                        </div></div>
                        <br/><div className="row text-center wraper bbb card-footer">
                        
                        <Link to={'/home/'+this.props.projectId+'/file-system/'+this.props.task._id}><button hidden={!this.props.file_access} className="btn" type="submit">Folders</button></Link>
                        <Link to={'/home/'+this.props.projectId+'/'+this.props.task._id+'/comments'}><button className="btn" type="submit">Comments</button></Link>
                        <button type="button" className="btn btn-primary" hidden={!this.props.data_entry} data-toggle="modal" data-target={"#"+this.props.index2}>
                        Edit 
                        </button>

                        <div className="modal fade" id={this.props.index2} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><b>{this.props.task.name}</b></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                           
                        <div className="container">
                    <form className="container form-group ex" onSubmit={this.handleSubmit} method="post">
                    <br/><div className="form-row">
                         <div className="col">
                             <label htmlFor="weightage"><h5><b>Weightage</b></h5></label>
                             <input type="text" ref={"weightage"+this.props.task._id} value={this.state.weightage} onChange={() => this.onChange("weightage")} required></input><br/>
                        </div></div>
                        <div className="row">
                             <div className="col">
                                 <label htmlFor="start_date"><h5><b>Start date(planned)</b></h5></label>
                                 <input type="date" ref={"start_date"+this.props.task._id} value={ this.state.start_date} onChange={() => this.onChange("start_date")} required></input></div>
                             <div className="col">
                                 <label htmlFor="end_date"><h5><b>End date(planned)</b></h5></label>
                                 <input type="date" ref={"end_date"+this.props.task._id} value={this.state.end_date} onChange={() => this.onChange("end_date")} required></input><br/>
                        </div></div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="actual_end_date"><h5><b>Actual end date</b></h5></label>
                                <input type="date" ref={"actual_end_date"+this.props.task._id} value={this.state.actual_end} onChange={() => this.onChange("Actual_end_date")} required></input><br/></div>
                            <div className="col">
                                <label htmlFor="actual_start"><h5><b>actual start Date</b></h5></label>
                                <input type="date" ref={"actual_start"+this.props.task._id} value={this.state.actual_start} onChange={() => this.onChange("Actual_start")} required></input><br/>
                        </div></div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="review_date"><h5><b>Review Date</b></h5></label>
                                <input type="date" ref={"review_date"+this.props.task._id} value={this.state.review_date} onChange={() => this.onChange("review_date")} required></input></div>
                           </div>
                        <div className="row">
                           <div className="col">
                            <label htmlFor="members"><h5><b>Add Members</b></h5></label>
                                <input type="email" ref={"member"+this.props.task._id} className="form-control"></input><a href={void(0)} src={Ad} className="btn glyphicon glyphicon-plus-sign" onClick={this.addMembers}><img src={Ad}></img>Add</a>
                                </div></div>

                        <div className="row">
                            <div className="col">
                                {viewMembers}
                                </div></div>
                        
                   
                    <br/>
                </form>
                                </div>
                                


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" hidden={!this.props.data_entry} disabled={this.state.disable} onClick={this.handleSubmit}>Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
        </div>


                    </div>
                        </div>

                      
                 
           
        );
    }
}


 export default Project;