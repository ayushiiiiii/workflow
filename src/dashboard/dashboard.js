import React, {Component} from 'react';
import './dashboard.css';
import HttpService from '../services/http-service';
import Cards  from './cards';
import Login from '../login/login';
import {Link ,Redirect} from 'react-router-dom';


const http= new HttpService();
class App extends Component {

render(){
  if(this.props.Loggedin === false){
    return <Redirect to ="/login"/>
  }
  const cardss = [];
  for(let i=0;i<this.props.projects.length;i++){
    let sum = 0;
    this.props.projects[i].tasks.forEach(task => {sum += task.completion*task.weightage/100;});
    cardss.push(<Cards key={i} title={this.props.projects[i].name} project= {this.props.projects[i]} completion={sum} />);
  }
    return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-sm bg-light justify-content-center ">&nbsp;&nbsp;&nbsp;&nbsp;
          <center> <h1>Project list </h1> </center>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          
      </nav>
    


    <div className=" App-main">
      <div className="row">
        {this.props.isProjectsLoading?<div className="icon"><i className="fas fa-spinner fa-3x fa-pulse text-primary ic"></i></div>:null}
      {cardss}

      </div>
      </div>     
     </div>
  );
}
}


export default App;
