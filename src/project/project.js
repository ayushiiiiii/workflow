import React, { Component } from 'react';
import './project.css';
import Progress from './progress';

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
                                <td><span>{start_date.toDateString().slice(4)}</span></td>
                                <td><span>{this.props.task.expected_completion}</span></td>
                                <td><span>{this.props.task.actual_end_date}</span></td>
                            </tr>
                            <tr>
                                <td>Date </td>
                                <td>Days</td>
                                <td>Days</td>
                            </tr>
                            </tbody>
                        </table></center>
                        <Progress percentage={this.props.task.completion}/>
                        <br/>
                        <button className="btn" type="submit">Details</button>
                        </div>
                 </div>
           
        );
    }
}


 export default Project;