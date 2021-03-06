import React, { Component } from 'react';
import './card.css';
import { Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';

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
            start_date: (!this.props.project.start_date?'':formatDate(this.props.project.start_date)),
            fat_date: (!this.props.project.fat_date?'':formatDate(this.props.project.fat_date)),
            actual_end: (!this.props.project.actual_end?'':formatDate(this.props.project.actual_end)),
            active: this.props.project.active,
            disableSubmit: true
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
        let project={
            name: this.state.name,
            mdsno: this.state.mdsno,
            short_name: this.state.short_name,
            location: this.state.location,
            machine: this.state.machine,
            start_date: this.state.start_date,
            fat_date: this.state.fat_date,
            actual_end: this.state.actual_end,
            active: this.state.active,
        };
        this.props.editProject({projectId: this.props.project._id, project: project});
    }
    onChange(field){
        if(field!=="active"){
            this.setState({[field]: this.refs[field+this.props.project._id].value, disableSubmit: false})
        }else{
            this.setState({[field]: (this.refs[field+this.props.project._id].value==="true"?true:false), disableSubmit: false})
        }
    }
    render(){
        let start_date = new Date(this.props.project.start_date);
        let fat_date = new Date(this.props.project.fat_date);
        return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card project " hidden={!this.props.showCards}>
                <div className="card-header">
                    <HTMLEllipsis
                        unsafeHTML={`<h4 className="card-title" data-toggle="tooltip" title="${this.props.title}">${this.props.title}</h4>`}
                        basedOn='letters' trimRight />
                    {/* &nbsp;&nbsp; <i hidden={!this.props.data_entry} className="fa fa-close ml-auto close-button" onClick={() => this.props.deleteProject(this.props.project._id, this.props.project.name)} /> */}
                </div>
                <div className="card-body px-0 pb-0">
                    <div className="card-text px-0 container-fluid">
                       <center className="mx-0 mx-lg-4">
                        <div className="table-responsive">
                            <table className="table table-striped text-center table-condensed w-100">
                                <tbody>
                                <tr>
                                <td><b>MACHINE</b></td>
                                    <td>
                                        <div style={{height: '3em', overflowY: 'scroll'}}>
                                            {this.props.project.machine}
                                        </div>
                                    </td>
                                </tr>
                                <tr><td><b>MDSNO</b></td><td><span>{this.props.project.mdsno}</span></td>
                                </tr><tr>
                                    <td><b>LOCATION</b></td><td><span>{this.props.project.location}</span></td></tr>
                                <tr><td><b>START&nbsp;DATE</b></td><td><span>{start_date.toDateString().slice(4)} </span></td>
                                </tr>
                                <tr><td><b>FAT&nbsp;DATE</b></td><td><span>{fat_date.toDateString().slice(4)} </span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        </center>

                        
                    <div className="col-sm-6">
                    <CircularProgressbar value={this.props.completion} text={`${Math.round(this.props.completion*100)/100}%`} />
                    </div>
                    <div className="card-footer">
                    <Link to={"/home/"+this.props.project._id}><button className="btn btn-success">More details</button></Link>
                    <button hidden={!this.props.data_entry} type="button" className="btn btn-primary" data-toggle="modal" data-target={"#"+this.props.index}>
                        Edit 
                        </button>   
                    </div>



                    </div>
                </div>
            </div>
            <div className="modal fade" id={this.props.index} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.props.project.mdsno}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                           
                        <div className="container">
                    <nav className="navbar navbar-expand-sm bg-light justify-content-center">

                    <center> <h1>{this.props.title}</h1> </center>
                    </nav><br/>
                                <form className="container ex form-group" onSubmit={this.handleSubmit} method="post">
                                        <br/>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="mdsno" className="control-label "><h5><b>Project Number</b></h5></label>
                                            <input type="text" ref={"mdsno"+this.props.project._id} value={this.state.mdsno} onChange={() => this.onChange("mdsno")} required></input></div>
                                        <div className="col">
                                            <label  htmlFor="name" className="control-label "><h5><b>Project Name</b></h5></label>
                                            <input type="text" ref={"name"+this.props.project._id} value={this.state.name} onChange={() => this.onChange("name")} required></input>
                                </div></div> <br/>
                            <div className="row">
                                    <div className="col">
                                        <label htmlFor="short_name" className="control-label" ><h5><b>Short Name</b></h5></label>
                                        <input type="text" ref={"short_name"+this.props.project._id} value={this.state.short_name} onChange={() => this.onChange("short_name")}  required></input></div>
                                    <div className="col">
                                        <label htmlFor="location"  className="control-label"><h5><b>Location</b></h5></label>
                                        <input type="text" ref={"location"+this.props.project._id} value={this.state.location} onChange={() => this.onChange("location")}  required></input>
                            </div></div> <br/>
                                <div className="row">
                                    <div className="col">   
                                        <label htmlFor="start_date"  className="control-label"><h5><b>Start date</b></h5></label>
                                        <input type="date" ref={"start_date"+this.props.project._id} value={this.state.start_date} onChange={() => this.onChange("start_date")}  required></input></div>
                                    <div className="col">
                                        <label htmlFor="fat_date"  className="control-label"><h5><b>Fat Date</b></h5></label>
                                        <input type="date"ref={"fat_date"+this.props.project._id} value={this.state.fat_date} onChange={() => this.onChange("fat_date")} required></input>
                                    </div></div> <br/>
                                <div className="row">
                                        <div className="col">
                                            <label htmlFor="actual_end"  className="control-label"><h5><b>Actual End Date</b></h5></label>
                                            <input type="date" ref={"actual_end"+this.props.project._id} value={this.state.actual_end} onChange={() => this.onChange("actual_end")}  required></input></div>
                                        <div className="col">
                                            <label htmlFor="active_inactive"  className="control-label"><h5><b>Active/Inactive</b></h5></label>
                                            <select className="dropdown" value={this.state.active?"true":"false"} ref={"active"+this.props.project._id} onChange={() => this.onChange("active")}  required>
                                            <option value="true">Active</option>
                                            <option value="false">Inactive</option></select ></div>
                            </div><br/>
                            <div className="row">
                                    <div className="col">
                                        <label htmlFor="machine" className="control-label"><h5><b>Machine</b></h5></label>
                                        <input type="text" ref={"machine"+this.props.project._id} value={this.state.machine} onChange={() => this.onChange("machine")}  required></input></div>
                                   </div><br/>
                                
                                </form>
                                </div>
                                


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" hidden={!this.props.data_entry} onClick={this.handleSubmit} disabled={this.state.disableSubmit}>Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
        </div>

           
        );
    }
}


 export default Cards;
