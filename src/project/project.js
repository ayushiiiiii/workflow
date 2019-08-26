import React, { Component } from 'react';
import './project.css';
import Progress from './progress'

class Project extends Component{
    render(){
        return(
        <div className="col-12 col-sm-6 col-md-3">
            <div className="card project">
                <div className="card-header">
                    <h4 className="card-title">{this.props.title}</h4>
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <table>
                            <tr>
                                <th>Start</th>
                                <th>Target</th>
                                <th>Actual</th>
                            </tr>
                            <tr>
                                <td><input type="text" size="3"></input></td>
                                <td><input type="text" size="3"></input></td>
                                <td><input type="text" size="3"></input></td>
                            </tr>
                            <tr>
                                <td>Date </td>
                                <td>Days</td>
                                <td>Days</td>
                            </tr>
                        </table>
                        <Progress percentage="80"/>
                        <br/>
                        <button type="submit">Details</button>
                        </div>
                 </div>
            </div>
            </div>
        );
    }
}


 export default Project;