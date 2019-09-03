import React, {Component} from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Project from './project/project';
import HttpService from './services/http-service';
import Navbar from './project/navbar';
import Progress from './project/progress';
import Login from './login/login';
import { baseUrl } from './baseurl';


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
componentDidMount(){
  
}
render(){
  const Projects = [];
  if(this.props.project){
    for(let i=0;i<this.props.project.tasks.length;i++){
      Projects.push(<Project  task={this.props.project.tasks[i]} />);
    }
    return (
      <div >
        <Navbar start_date={this.props.project.start_date} end_date={this.props.project.fat_date} project_name={this.props.project.name} location={this.props.project.location}/>
  
      <div className=" App-main">
        <div className="row">
        {Projects}
        
      </div>  
        </div>
       </div>
       
    
    );
  }
  return(<div></div>);
}
}


export default App;
