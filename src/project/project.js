import React, { Component } from 'react';
import './project.css';
import { Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { buildStyles } from 'react-circular-progressbar';

class Project extends Component{
    constructor(props){
        super(props);

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
                        </div></div>
                 </div>
           
        );
    }
}


 export default Project;