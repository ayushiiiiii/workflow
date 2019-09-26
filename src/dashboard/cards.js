import React, { Component } from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class Cards extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div className="col-12 col-sm-6 col-md-3">
            <div className="card project ">
                <div className="card-header">
                    <h4 className="card-title">{this.props.title} &nbsp;&nbsp; <i className="fa fa-close"/> </h4>
                </div>
                <div className="card-body ">
                    <div className="card-text container-fluid">
                       <center> <table className=" table-responsive table table-striped text-center table-condensed">
                            <tbody>
                            <tr>
                             <td><b>MACHINE</b></td><td><span>{this.props.project.machine} </span></td></tr>
                             <tr><td><b>MDSNO</b></td><td><span>{this.props.project.mdsno}</span></td>
                            </tr><tr>
                                <td><b>LOCATION</b></td><td><span>{this.props.project.location}</span></td></tr>
                                <tr><td><b>SHORT NAME</b></td><td><span>{this.props.project.short_name} </span></td>
                            </tr>
                            <tr><td><b>START DATE</b></td><td><span>{this.props.project.start_date} </span></td>
                            </tr>
                            <tr><td><b>FAT DATE</b></td><td><span>{this.props.project.fat_date } </span></td>
                            </tr>
                            </tbody>
                        </table></center>

                        
                    <div className="col-sm-6">
                    <CircularProgressbar value={this.props.completion} text={`${this.props.completion}%`} />
                    </div>
                    <Link to={"/home/"+this.props.project._id}><button type="Submit">More details</button></Link> 
                    </div>
                </div>
            </div>
        </div>

           
        );
    }
}


 export default Cards;