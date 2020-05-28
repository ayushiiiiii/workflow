import React, {Component} from 'react';
import './dashboard/dashboard.css';
import Project from './project/project';
import Navbar from './project/navbar';
import {Link} from 'react-router-dom';
import Disable from './dashboard/disablecard';


class App extends Component {
  constructor(props){
    super(props);

    this.weightage = {
      "Mechanical Design": 10,
      "Electrical Design": 5,
      "Mechanical Parts Ordering": 15,
      "Electrical Parts Ordering": 15,
      "Mechanical assy": 10,
      "Electrical assy": 5,
      "Total Assembly": 5,
      "Programming": 10,
      "Testing and internal trial": 5,
      "FAT and review point": 10,
      "Installation Commissioning": 5,
      "Handover and Closure": 5
    };
 }
render(){
  let Projects = [], Disables = [];
  if(this.props.project){
    for(let i=0;i<this.props.project.tasks.length;i++){
      Projects.push(<Project key={i} file_access={this.props.file_access} data_entry={this.props.data_entry} index={i} index2={"project"+i} editTask={this.props.editTask} projectId={this.props.projectId} project= {this.props.project}  task={this.props.project.tasks[i]} />);
    }
    let temp = {
      "Mechanical Design": false,
      "Electrical Design": false,
      "Mechanical Parts Ordering": false,
      "Electrical Parts Ordering": false,
      "Mechanical assy": false,
      "Electrical assy": false,
      "Total Assembly": false,
      "Programming": false,
      "Testing and internal trial": false,
      "FAT and review point": false,
      "Installation Commissioning": false,
      "Handover and Closure": false
    };

    let disables=[];
    this.props.project.tasks.forEach(task => {
      temp[task.name]=true;
    });
    for(let key in temp){
      if(!temp[key]){
        disables.push(key);
      }
    }
    for(let i=0;i<disables.length;i++){
      Disables.push(<Disable key={i} data_entry={this.props.data_entry} projectId={this.props.projectId} addTask={this.props.addTask} task={disables[i]} weightage={this.weightage[disables[i]]} />);
    }
    return (
      <div className="container-fluid">
        <Navbar logOut={this.props.logOut} start_date={this.props.project.start_date} end_date={this.props.project.fat_date} project_name={this.props.project.name} location={this.props.project.location}/>
          
      <div className=" App-main">
        <div className="row">
        {Projects}
        {Disables}
      </div>  
        </div>
        <Link to={'/home/'+this.props.projectId+'/file-system/Application Data'}><button hidden={!this.props.file_access} type="submit"  className="btnnav " > Application data</button></ Link>
          
          <div className="col-sm-12 col-12 col-md-12">
          <Link to={'/home/'+this.props.projectId+'/file-system/Solution'}> <button type="submit" hidden={!this.props.file_access} className="btnnav "> Solution</button></Link>
      
        
          <Link to={'/home/'+this.props.projectId+'/file-system/Project Management'}> <button type="submit" hidden={!this.props.file_access} className="btnnav "> Project Management</button></Link>
         <Link to={'/home/'+this.props.projectId+'/complete'} ><button type="submit"  className="btnnav " hidden={!this.props.data_entry}> Edit Completion</button></Link>
       
          </div>
       </div>
       
    
    );
  }
  return(<div></div>);
}
}


export default App;
