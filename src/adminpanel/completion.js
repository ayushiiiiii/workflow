import React, {Component} from 'react';

class Complete extends Component{
    constructor(props){
        super(props);
        this.state={
            tasks: this.props.tasks,
            disable: true
        }
        this.tasks=this.props.tasks;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(i){
        let temp=this.state.tasks;
        temp[i].completion = this.refs[temp[i]._id].value;
        this.setState({tasks: temp, disable: false});
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.editTasks({projectId: this.props.projectId, tasks: this.state.tasks});
    }
    render(){
        var taskView = [];
        for(let i=0;i<this.state.tasks.length;i++){
            taskView.push(
                <span key={this.state.tasks[i]._id}>
                    <label htmlFor="project1"><b>{this.state.tasks[i].name}</b></label>
                    <input ref={this.state.tasks[i]._id} type="range" name="points" className="custom-range" min="0" value="0" max="100" onChange={() => this.handleChange(i)} value={this.state.tasks[i].completion}/>
                    <span>{this.state.tasks[i].completion}</span>
                    <br/>
                </span>
            );
        };
        return(
            <div  className="container ui-content range-field my-5">
                <form onSubmit={this.handleSubmit} style={{backgroundColor: 'white'}} method="post" className="log form-group">
                <h1>Tasks Completion</h1>
                    <hr/>
                    {taskView}
                    <button type="submit" className="btn btn-primary" disabled={this.state.disable}>Apply</button>
                </form>


            </div>
        );
    }
}
export default Complete;