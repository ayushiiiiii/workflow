import React from 'react';
import Dashboard from './dashboard';
import Insidedashboard from '../insidedashboard';

class SwitchComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            index: 0,
            timeout: 5000
        };
    }

    render() {
        setTimeout(() => {
            const length = this.props.projects.length;
            let index = this.state.index;
            index = (index+1)%(length+1);
            this.setState({index: index});
        }, this.state.timeout);
        const Timeout = () => {
            return(
                <>
                    <input type="number" style={{position: 'fixed', bottom: 15, right: 15, width: 50, height: 50, paddingLeft: 10, backgroundColor: 'black', color: 'white'}} min='5' value={this.state.timeout/1000} onChange={(event) => this.setState({timeout: event.target.value*1000})} />
                </>
            );
        }
        if(!this.state.index){
            return(
                <>
                    <Dashboard data_entry={this.props.data_entry} logOut={this.props.logOut} editProject={this.props.editProject} getProjects={this.props.getProjects} token={this.props.token} projects={this.props.projects} isProjectsLoading={this.props.isProjectsLoading} goBack={this.props.goBack} />
                    <Timeout />
                </>    
            );
        }else{
            return(
                <>
                    <Insidedashboard file_access={this.props.file_access} data_entry={this.props.data_entry}  logOut={this.props.logOut} editTask={this.props.editTask} projectId={this.props.projects[this.state.index-1]._id} addTask={this.props.addTask} project={this.props.projects[this.state.index-1]} goBack={this.props.goBack} />
                    <Timeout />
                </>
            );
        }
    }
}

export default SwitchComponent;