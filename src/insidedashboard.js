import React, {Component} from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Project from './project/project';
import HttpService from './services/http-service';
import Navbar from './project/navbar';
import Progress from './project/progress';
import Login from './login/login';


const http= new HttpService();
class App extends Component {
  constructor(props){
     super(props);
     this.loadData=this.loadData.bind(this);
     this.loadData();
 }
loadData =()=> {
http.getProducts().then(products =>{
  console.log(products);

},err=> {

})
}

render(){
  const Projects = [];
  for(let i=0;i<9;i++){
    Projects.push(<Project  title="Mechanical Design &Review" />);
  }
    return (
    <div className="container">
      <Navbar/>

    <div className=" App-main">
      <div className="row">
      {Projects}
      
    </div>  
      </div>
     </div>
     
  
  );
}
}


export default App;
