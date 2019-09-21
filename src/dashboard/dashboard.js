import React, {Component} from 'react';
import './dashboard.css';
import HttpService from '../services/http-service';
import Cards  from './cards';
import List from './listformat';
import {Redirect} from 'react-router-dom';


class App extends Component {
constructor(){
  super();
  this.state={
    showCards: false
  }
  this.handleCheckChange = this.handleCheckChange.bind(this);
}
handleCheckChange(){
  this.setState({showCards: !this.state.showCards});
}
render(){
  if(this.props.Loggedin == false){
    return <Redirect to ="/login"/>
  }
  const cardss = [];
  const list = [];
  for(let i=0;i<this.props.projects.length;i++){
    let sum = 0;
    this.props.projects[i].tasks.forEach(task => {sum += task.completion*task.weightage/100;});
    cardss.push(<Cards key={i} title={this.props.projects[i].name} project= {this.props.projects[i]} completion={sum} />);
    list.push(<List key={i} index={i} title={this.props.projects[i].name} project= {this.props.projects[i]} completion={sum} />);
  }
    return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-sm bg-light justify-content-center ">&nbsp;&nbsp;&nbsp;&nbsp;
          <center> <h1>Project list </h1> </center>
          <div className="toggle">
            <h7>Show Cards</h7><br/>
            <label className="switch">
              <input type="checkbox" onChange={this.handleCheckChange}/>
              <span className="slider round"></span>
            </label>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          
      </nav>
    


    <div className=" App-main">
        {this.props.isProjectsLoading?<div className="icon"><i className="fas fa-spinner fa-3x fa-pulse text-primary ic"></i></div>:null}
        <div className={"accordion container"+(this.state.showCards?" d-none":"")} id="projectsAccordion">
          {list}
        </div>
        <div className={"row"+(this.state.showCards?"":" d-none")}>
          {cardss}

      </div>
      </div>     
     </div>
  );
}
}


export default App;
