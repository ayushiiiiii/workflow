import React, {Component} from 'react';
import './dashboard.css';
import Cards  from './cards';
import List from './listformat';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { baseUrl } from '../baseurl';

const MySwal = withReactContent(Swal);


class App extends Component {
constructor(){
  super();
  this.state={
    showCards: false
  }
  this.handleCheckChange = this.handleCheckChange.bind(this);
  this.deleteProject = this.deleteProject.bind(this);
}
handleCheckChange(){
  this.setState({showCards: !this.state.showCards});
}
deleteProject(projectId, name){
  MySwal.fire({
      title: <p>Are you sure you want to delete Project {name}</p>,
      text: "You won't be able to revert this!",
      type: 'warning',
      customClass: {
          popup: 'animated tada'
      },
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
      if (result.value) {
        fetch(baseUrl+'projects/'+projectId, {
          method: "DELETE",
          headers: {
            'Authorization': 'Bearer '+this.props.token
          }
        }).then(res => res.json()).then((res) => {
          if(res.success){
            this.props.getProjects();
            MySwal.fire(
              'Deleted!',
              'Project '+name+' has been deleted.',
              'success'
            )
          }
        });
      }
  });
}
render(){
  const cardss = [];
  const list = [];
  for(let i=0;i<this.props.projects.length;i++){
    let sum = 0;
    this.props.projects[i].tasks.forEach(task => {sum += task.completion*task.weightage/100;});
    cardss.push(<Cards key={i} editProject={this.props.editProject} index={"project"+i} showCards={this.state.showCards} deleteProject={this.deleteProject} title={this.props.projects[i].name} project= {this.props.projects[i]} completion={sum} />);
    list.push(<List key={i} index={i} index2={"project"+i} deleteProject={this.deleteProject} title={this.props.projects[i].name} project= {this.props.projects[i]} completion={sum} />);
  }
    return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-sm bg-light justify-content-center "> 
      
      &nbsp;&nbsp;&nbsp;&nbsp;
     
          <center> <h1>Project list </h1> </center>
          <div className="toggle">
            <span>Show Cards</span><br/>
            <label className="switchs">
              <input type="checkbox" onChange={this.handleCheckChange}/>
              <span className="slider round"></span>
            </label>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          
      </nav>
    


    <div className=" App-main">
        {this.props.isProjectsLoading?<div className="icon"><i className="fas fa-spinner fa-3x fa-pulse text-primary ic"></i></div>:null}
        <div className="accordion container" hidden={this.state.showCards} id="projectsAccordion">
          {list}
        </div>
        <div className="row">
          {cardss}

      </div>
      </div>     
     </div>
  );
}
}


export default App;
