import React, {Component} from 'react';
import './dashboard/dashboard.css';
import Project from './project/project';
import Navbar from './project/navbar';
import {Link} from 'react-router-dom';
import Disable from './dashboard/disablecard';


class App extends Component {
  constructor(props){
    super(props);
 }
render(){
  let Projects = [], Disables = [];
  if(this.props.project){
    for(let i=0;i<this.props.project.tasks.length;i++){
      Projects.push(<Project key={i} index={i} index2={"project"+i} projectId={this.props.projectId} project= {this.props.project}  task={this.props.project.tasks[i]} />);
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
      "FAT & review point": false,
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
      Disables.push(<Disable projectId={this.props.projectId} addTask={this.props.addTask} task={disables[i]}/>);
    }
    return (
      <div className="container-fluid">
        <Navbar start_date={this.props.project.start_date} end_date={this.props.project.fat_date} project_name={this.props.project.name} location={this.props.project.location}/>
          
      <div className=" App-main">
        <div className="row">
        {Projects}
        {Disables}
      </div>  
        </div>
        <Link to={'/home/'+this.props.projectId+'/file-system/Application Data'}><button type="submit"  className="btnnav " > Application data</button></ Link>
          
          <div className="col-sm-12 col-12 col-md-12">
          <Link to={'/home/'+this.props.projectId+'/file-system/Solution'}> <button type="submit"  className="btnnav "> Solution</button></Link>
      
        
          <Link to={'/home/'+this.props.projectId+'/file-system/Project Management'}> <button type="submit"  className="btnnav "> Project Management</button></Link>
         <Link to={'/home/'+this.props.projectId+'/complete'} ><button type="submit"  className="btnnav "> Edit Completion</button></Link>
       
          </div>
       </div>
       
    
    );
  }
  return(<div></div>);
}
}


export default App;
