import React, { Component } from 'react';
import './project.css';
import { Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { buildStyles } from 'react-circular-progressbar';

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
            name: this.props.project.tasks[this.props.index].name,
            weightage: this.props.project.tasks[this.props.index].weightage,
            start_date: formatDate(this.props.project.tasks[this.props.index].start_date),
            end_date: formatDate(this.props.project.tasks[this.props.index].end_date),
            actual_start: formatDate(this.props.project.tasks[this.props.index].actual_start),
            actual_end: formatDate(this.props.project.tasks[this.props.index].actual_end),
         
        }
    }

        onChange(field){
            this.setState({[field]: this.refs[field+this.props.project._id].value})
        }
    
    render(){
        let start_date = new Date(this.props.task.start_date);
        let actual_end_date = new Date(this.props.task.actual_end_date);
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
                        
                        <Link to={'/home/'+this.props.projectId+'/file-system/'+this.props.task._id}><button className="btn" type="submit">Folders</button></Link>
                        <Link to={'/home/'+this.props.projectId+'/'+this.props.task._id+'/comments'}><button className="btn" type="submit">Comments</button></Link>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={"#"+this.props.index2}>
                        Edit 
                        </button>

                        <div class="modal fade" id={this.props.index2} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"><b>Add Task</b></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                           
                        <div className="container">
                    <form className="container form-group ex" onSubmit={this.handleSubmit} method="post">
                    <br/><div className="form-row">
                        <div className="col text-center" >
                            <label htmlfor="name" ><h5><b>Major Tasks </b></h5></label>
                            
                            <select ref="name"  ref={"name"+this.props.project._id} defaultValue={this.state.name} onChange={() => this.onChange("name")} required>
                            <option value="Mechanical Design" selected>Mechanical Design</option>
                            <option value="Electrical Design">Electrical Design</option>
                            <option value="Mechanical Parts Ordering">Mechanical Parts Ordering</option>
                            <option value="Electrical Parts Ordering">Electrical Parts Ordering</option>
                            <option value="Mechanical assy" >Mechanical assy</option>
                            <option value="Electrical assy" >Electrical assy</option>
                            <option value="Total Assembly">Total Assembly</option>
                            <option value="Programming">Programming</option>
                            <option value="Testing & internal trial" >Testing & internal trial</option>
                            <option value="FAT & review point">FAT & review point</option>
                            <option value="Installation Commissioning">Installation Commissioning</option>
                            <option value="Handover and closure">Handover and closure</option>
                         </select></div>
                         <div className="col">
                             <label htmlfor="weightage"><h5><b>Weightage</b></h5></label>
                             <input type="text" ref={"weightage"+this.props.project._id} value={this.state.weightage} onChange={() => this.onChange("weightage")} required></input><br/>
                        </div></div>
                        <div className="row">
                             <div className="col">
                                 <label htmlfor="start_date"><h5><b>Start date(planned)</b></h5></label>
                                 <input type="date" ref={"start_date"+this.props.project._id} value={ this.state.start_date} onChange={() => this.onChange("start_date")} required></input></div>
                             <div className="col">
                                 <label htmlfor="end_date"><h5><b>End date(planned)</b></h5></label>
                                 <input type="date" ref={"end_date"+this.props.project._id} value={this.state.end_date} onChange={() => this.onChange("end_date")} required></input><br/>
                        </div></div>
                        <div className="row">
                            <div className="col">
                                <label htmlfor="actual_end_date"><h5><b>Actual end date</b></h5></label>
                                <input type="date" ref={"actual_end_date"+this.props.project._id} value={this.state.actual_end} onChange={() => this.onChange("Actual_end_date")} required></input><br/></div>
                            <div className="col">
                                <label htmlfor="actual_start"><h5><b>actual start Date</b></h5></label>
                                <input type="date" ref={"actual_start"+this.props.project._id} value={this.state.actual_start} onChange={() => this.onChange("Actual_start")} required></input><br/>
                        </div></div>
                        <div className="row">
                            <div className="col">
                                <label htmlfor="review_date"><h5><b>Review Date</b></h5></label>
                                <input type="date" ref={"review_date"+this.props.project._id} value={this.state.review_date} onChange={() => this.onChange("review_date")} required></input></div>
                           </div>
                        
                   
                    <br/>
                </form>
                                </div>
                                


                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
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