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
    cardss.push(<Cards title={this.props.projects[i].name} project= {this.props.projects[i]} completion={sum} />);
  }
    return (
    <div >
      <nav className="navbar navbar-expand-sm bg-light justify-content-center">
          <center> <h1>Project list </h1> </center>
          
          < Link to='/app'> <button type="submit" className="btnnav" > Application data</button></ Link>
          
          
            <button type="submit" className="btnnav"> Solution</button>
        
          
            <button type="submit" className="btnnav"> Project Management</button>
         
      </nav>
    


    <div className=" App-main">
      <div className="row">
      {cardss}

      </div>
      </div>     
     </div>
  );
}
}


export default App;
