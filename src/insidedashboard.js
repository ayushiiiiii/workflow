import React, {Component} from 'react';
import './dashboard/dashboard.css';
import Project from './project/project';
import HttpService from './services/http-service';
import Navbar from './project/navbar';
import {Link} from 'react-router-dom';
import Disable from './dashboard/disablecard';


class App extends Component {
  constructor(props){
     super(props);
 }
componentDidMount(){
  
}
render(){
  let Projects = [];
  if(this.props.project){
    for(let i=0;i<this.props.project.tasks.length;i++){
      Projects.push(<Project key={i} projectId={this.props.projectId} task={this.props.project.tasks[i]} />);
    }
    return (
      <div className="container-fluid">
        <Navbar start_date={this.props.project.start_date} end_date={this.props.project.fat_date} project_name={this.props.project.name} location={this.props.project.location}/>
          
      <div className=" App-main">
        <div className="row">
        {Projects}
        <Disable projectId={this.props.projectId} task={this.props.project.tasks[0]}/>
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
