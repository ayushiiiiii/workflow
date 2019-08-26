import React, {Component} from 'react';
import './dashboard.css';
import HttpService from '../services/http-service';
import Cards  from './cards';
import styled from 'styled-components';
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
    cardss.push(<Cards title={this.props.projects[i].name} project= {this.props.projects[i]} />);
  }
    return (
    <div >
      <nav className="navbar navbar-expand-sm bg-light justify-content-center">

        <center> <h1>Project list </h1> </center>
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
