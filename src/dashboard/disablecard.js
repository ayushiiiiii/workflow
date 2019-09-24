import React, { Component } from 'react';
import '../project/project.css';
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
        return(
        <div className="col-12 col-sm-6 col-md-3">
            <div className="card project text-center">
                <div className="card-header">
                    <h4 className="card-title">{this.props.task.name}</h4>
                </div>
                <br/>
<center><table className="table-responsive table table-striped text-center ">
                            <tbody>
                            <tr>
                                <th>Start</th>
                                <th>Target</th>
                                <th>Actual</th>
                            </tr>
                            <tr>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                            </tr>
                            <tr>
                                <td>Date </td>
                                <td>Days</td>
                                <td>Days</td>
                            </tr>
                            </tbody>
                        </table></center>
                        <div className="col-6">
                        <CircularProgressbar value={this.props.task.completion} text={`${this.props.task.completion}%`} />;
                        </div>
                        <br/>
                        <Link to={'/home/'+this.props.projectId+'/file-system/'+this.props.task._id}><button className="btn" type="submit">Details</button></Link>
                        </div>
                 </div>
           
        );
    }
}


 export default Project;