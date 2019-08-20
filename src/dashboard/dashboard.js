import React, {Component} from 'react';
import './dashboard.css';
import HttpService from '../services/http-service';
import Navbar from '../project/navbar';
import Cards  from './cards';


const http= new HttpService();
class App extends Component {
  constructor(props){
     super(props);
 }

render(){
  const cardss = [];
  for(let i=0;i<9;i++){
    cardss.push(<Cards title="Project 1" />);
  }
    return (
    <div className="container">
      <Navbar/>

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
