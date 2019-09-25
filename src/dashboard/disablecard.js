import React, { Component } from 'react';
import '../project/project.css';
import { Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { buildStyles } from 'react-circular-progressbar';
import './disabledcard.css';
import Ad from '../pluss.png';



class  Disable extends Component{
    constructor(props){
        super(props);
        this.state={
        members: []
    }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addMembers = this.addMembers.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.project_name]: e.target.value
    })
}
    handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            name: this.refs.major_task.value,
            weightage: this.refs.weightage.value,
            start_date: this.refs.start_date.value,
            end_date: this.refs.end_date.value,
            completion: this.refs.completion.value,
            actual_start: this.refs.actual_start.value,
            actual_end_date: this.refs.actual_end_date.value,
            members: this.state.members
        }
        this.props.addTask({task: task});
       
    }
   
    addMembers(e){
        e.preventDefault();
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.refs.member.value))) return;
        this.setState({members: [this.refs.member.value, ...this.state.members]});
        this.refs.member.value='';
    }
    removeMembers(member){
        let arr = [...this.state.members];
        arr.splice(this.state.members.indexOf(member),1);
        this.setState({members: arr});
    }
    render(){
        if(!this.state.addMembers){
            let members = [];
            const returnMembers = () => {
                for(let i=0;i<this.state.members.length;i++){
                    members.push(<li key={i}>{this.state.members[i]} <span className="btn btn-danger btn-sm rounded-circle" onClick={() => this.removeMembers(this.state.members[i])}>&#x2715;</span></li>);
                }
                return members;
            }
        let start_date = new Date(this.props.task.start_date);
        return(
        <div className="col-12 col-sm-6 col-md-3 ">
            <div className="card project text-center ">
                <div className="card-header ">
                    <h4 className="card-title">{this.props.task}</h4>
                </div>
                <div className="card-body bodyy">
                <br/>
<center><table className="table-responsive table table-striped text-center ">
                            <tbody>
                            <tr>
                                <th>Start</th>
                                <th>Target</th>
                                <th>Actual</th>
                            </tr>
                            <tr>
                                <td><span>--/--/----</span></td>
                                <td><span>--/--/----</span></td>
                                <td><span>--</span></td>
                            </tr>
                            <tr>
                                <td>Date </td>
                                <td>Days</td>
                                <td>Days</td>
                            </tr>
                            </tbody>
                        </table></center>
                        <div className="col-6">
                        <CircularProgressbar value={0} text={`0%`} />
                        </div>
                        <br/>
                    </div><div className="card-footer">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Add Now
                </button>
                </div>


                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form  id="myform" onSubmit={this.handleSubmit} method="post" className="form-group fo">
                            <hr/>
                            <label htmlfor="start_date">Start date(planned)</label>
                            <input type="date" ref="start_date" required></input>
                            <label htmlfor="end_date">End date(planned)</label>
                            <input type="date" ref="end_date" required></input>
                            <label  htmlfor="duration">actual start Date</label>
                            <input type="date" ref="actual_start" required></input>
                            <label htmlfor=" review_date">Review Date</label>
                            <input type="date" ref="review_date" required></input>
                            <label htmlfor="actual_end_date">Actual end date</label>
                            <input type="date" ref="actual_end_date" required></input>
                            <label htmlfor="members">Add Members</label>
                            <input type="email" ref="member" className="form-control"></input>
                             <a href={void(0)} src={Ad} className="btn btn-primary glyphicon glyphicon-plus-sign" data-toggle="modal" data-target="#myModal"  onClick={this.addMembers}><img src={Ad}></img>Add</a>

                          {returnMembers() }

                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <input type="button" className="btn btn-primary" form='myform' value='Save Changes' />
                    </div>
                    </div>
                </div>
                </div>
                        </div>
                 </div>
           
        );
    }
}
}

 export default Disable