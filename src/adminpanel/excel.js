import React, {Component } from 'react';
import './excel.css';
import Ad from '../pluss.png';


class TaskForm extends Component{
    constructor(props){
        super(props);
        this.state={
        members: []
    }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addMembers = this.addMembers.bind(this);
        this.removeMembers=this.removeMembers.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            name: this.refs.major_task.value,
            weightage: this.refs.weightage.value,
            start_date: this.refs.start_date.value,
            end_date: this.refs.end_date.value,
            actual_start: this.refs.actual_start.value,
            actual_end_date: this.refs.actual_end_date.value,
            expected_completion: this.refs.expected_completion.value,
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
    
    render()
    {       if(!this.state.addMembers){
                let members = [];
                const returnMembers = () => {
                    for(let i=0;i<this.state.members.length;i++){
                        members.push(<li key={i}>{this.state.members[i]} <span className="btn btn-danger btn-sm rounded-circle" onClick={() => this.removeMembers(this.state.members[i])}>&#x2715;</span></li>);
                    }
                    return members;
                }
        

        return(
            <div className="container" > <nav className="navbar navbar-expand-sm bg-light justify-content-center">

            <center> <h1>Add Tasks</h1> </center>
            </nav><br/>
    
            <form className="container form-group ex" onSubmit={this.handleSubmit} method="post">
                    <br/><div className="form-row">
                        <div className="col text-center" >
                            <label htmlFor="major_tasks"><h5><b>Major Tasks </b></h5></label>
                            
                            <select ref="major_task" required>
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
                             <label htmlFor="weightage"><h5><b>Weightage</b></h5></label>
                             <input type="text" ref="weightage" required></input><br/>
                        </div></div>
                        <div className="row">
                             <div className="col">
                                 <label htmlFor="start_date"><h5><b>Start date(planned)</b></h5></label>
                                 <input type="date" ref="start_date" required></input></div>
                             <div className="col">
                                 <label htmlFor="end_date"><h5><b>End date(planned)</b></h5></label>
                                 <input type="date" ref="end_date" required></input><br/>
                        </div></div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="actual_end_date"><h5><b>Actual end date</b></h5></label>
                                <input type="date" ref="actual_end_date" required></input><br/></div>
                            <div className="col">
                                <label htmlFor="actual_start"><h5><b>actual start Date</b></h5></label>
                                <input type="date" ref="actual_start" required></input><br/>
                        </div></div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="review_date"><h5><b>Review Date</b></h5></label>
                                <input type="date" ref="review_date" required></input></div>
                                <div className="col">
                           <label htmlFor="expected_completion"><h5><b>Expected Completion</b></h5></label>
                                <input type="text" ref="expected_completion" required></input></div>
                         </div>
                         <div className="row">
                            <div className="col">
                            <label htmlFor="members"><h5><b>Add Members</b></h5></label>
                                <input type="email" ref="member" className="form-control"></input><a href={void(0)} src={Ad} className="btn glyphicon glyphicon-plus-sign" onClick={this.addMembers}><img src={Ad}></img>Add</a>
                                </div></div> <div className="col">
                                {returnMembers() }
                                </div>
                               <br/>
                        
                   
                    <br/>
                    <button type="submit">Add</button>
                    <button className="btn btn-danger" onClick={() => this.props.cancelAddTask()}>Cancel</button>
                </form>
            </div>


        );
        }
    }
}

export default TaskForm;
