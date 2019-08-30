import React, { Component } from 'react';
import './dashboard.css';
import Progress from   '../project/progress';
import { Link } from 'react-router-dom';

class Cards extends Component{
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
                             <td><b>MACHINE</b></td><td><span>{this.props.project.machine} </span></td></tr>
                             <tr><td><b>MDSNO</b></td><td><span>{this.props.project.mdsno}</span></td>
                            </tr><tr>
                                <td><b>DELIVERY</b></td><td><span>{this.props.project.delivery}</span></td></tr>
                                <tr><td><b>SHORT NAME</b></td><td><span>{this.props.project.short_name} </span></td>
                            </tr>
                            <tr><td><b>START DATE</b></td><td><span>{this.props.project.start_date} </span></td>
                            </tr>
                            <tr><td><b>FAT DATE</b></td><td><span>{this.props.project.fat_date } </span></td>
                            </tr>
                        </table>
                         <Progress percentage={this.props.project.percentage}/>
                    <Link to="/dashboard"><button type="Submit">More details</button></Link> 
                    </div>
                </div>
            </div>
        </div>

           
        );
    }
}


 export default Cards;