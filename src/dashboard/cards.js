import React, { Component } from 'react';
import './dashboard.css';
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
class Cards extends Component{
    constructor(props){
        super(props);
        this.state={
            name: this.props.project.name,
            mdsno: this.props.project.mdsno,
            short_name:this.props.project.short_name,
            location: this.props.project.location,
            machine:this.props.project.machine,
            start_date :formatDate(this.props.project.start_date),
            fat_date:formatDate(this.props.project.fat_date),
            actual_end:formatDate(this.props.project.actual_date),
            active: (this.props.project.active=="true"?true:false),
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(field){
        this.setState({[field]: this.refs[field+this.props.project._id].value})
    }
    render(){
        let start_date = new Date(this.props.project.start_date);
        let fat_date = new Date(this.props.project.fat_date);
        return(
        <div className="col-12 col-sm-6 col-md-3">
            <div className="card project ">
                <div className="card-header">
                    <h4 className="card-title">{this.props.title} &nbsp;&nbsp; <i className="fa fa-close ml-auto"/> </h4>
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
                            <tr><td><b>START DATE</b></td><td><span>{start_date.toDateString().slice(4)} </span></td>
                            </tr>
                            <tr><td><b>FAT DATE</b></td><td><span>{fat_date.toDateString().slice(4)} </span></td>
                            </tr>
                            </tbody>
                        </table></center>

                        
                    <div className="col-sm-6">
                    <CircularProgressbar value={this.props.completion} text={`${this.props.completion}%`} />
                    </div>
                    <div className="card-footer">
                    <Link to={"/home/"+this.props.project._id}><button type="Submit">More details</button></Link>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Edit 
                        </button>

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                           
                        <div className="container">
                    <nav className="navbar navbar-expand-sm bg-light justify-content-center">

                    <center> <h1>{this.props.title}</h1> </center>
                    </nav><br/>
                                <form className="container ex form-group" onSubmit={this.handleSubmit} method="post">
                                        <br/>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlfor="mdsno" className="control-label "><h5><b>Project Number</b></h5></label>
                                            <input type="text" ref={"mdsno"+this.props.project._id} value={this.state.mdsno} onChange={() => this.onChange("mdsno")} required></input></div>
                                        <div className="col">
                                            <label  htmlfor="name" className="control-label "><h5><b>Project Name</b></h5></label>
                                            <input type="text" ref={"name"+this.props.project._id} value={this.state.name} onChange={() => this.onChange("name")} required></input>
                                </div></div> <br/>
                            <div className="row">
                                    <div className="col">
                                        <label htmlfor="short_name" className="control-label" ><h5><b>Short Name</b></h5></label>
                                        <input type="text" ref={"short_name"+this.props.project._id} value={this.state.short_name} onChange={() => this.onChange("short_name")}  required></input></div>
                                    <div className="col">
                                        <label htmlfor="location"  className="control-label"><h5><b>Location</b></h5></label>
                                        <input type="text" ref={"location"+this.props.project._id} value={this.state.location} onChange={() => this.onChange("location")}  required></input>
                            </div></div> <br/>
                                <div className="row">
                                    <div className="col">   
                                        <label htmlfor="start_date"  className="control-label"><h5><b>start date</b></h5></label>
                                        <input type="date" ref={"start_date"+this.props.project._id} value={this.state.start_date} onChange={() => this.onChange("start_date")}  required></input></div>
                                    <div className="col">
                                        <label htmlfor="fat_date"  className="control-label"><h5><b>Fat Date</b></h5></label>
                                        <input type="date"ref={"fat_date"+this.props.project._id} value={this.state.fat_date} onChange={() => this.onChange("fat_date")} required></input>
                                    </div></div> <br/>
                                <div className="row">
                                        <div className="col">
                                            <label htmlfor="actual_end"  className="control-label"><h5><b>Actual Date</b></h5></label>
                                            <input type="date" ref={"actual_end"+this.props.project._id} value={this.state.actual_end} onChange={() => this.onChange("actual_end")}  required></input></div>
                                        <div className="col">
                                            <label htmlfor="active_inactive"  className="control-label"><h5><b>Active/Inactive</b></h5></label>
                                            <select className="dropdown" ref={"active"+this.props.project._id} onChange={() => this.onChange("active")}  required>
                                            <option value={true} selected={this.state.active}>Active</option>
                                            <option value={false} selected={!this.state.active}>Inactive</option></select ></div>
                            </div><br/>
                            <div className="row">
                                    <div className="col">
                                        <label htmlfor="machine" className="control-label"><h5><b>Machine</b></h5></label>
                                        <input type="text" ref={"machine"+this.props.project._id} value={this.state.machine} onChange={() => this.onChange("machine")}  required></input></div>
                                   </div><br/>
                                
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
            </div>
        </div>

           
        );
    }
}


 export default Cards;