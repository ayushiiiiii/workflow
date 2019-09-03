import React, {Component} from 'react';
import './insidedashboard.css';
import Project from './project/project';
import Login from './login/login';
import HttpService from './services/http-service';
import Dashboard from './dashboard/dashboard';
import Appdata from './dashboard/appdata';
import Insidedashboard from './insidedashboard';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PROJECTS } from './shared/projects';
import { Issues } from './shared/projects';
import Addpop from'./dashboard/add';
import Formm from './adminpanel/excel';
import Projectform from './adminpanel/projecttask';
import { baseUrl } from './baseurl';


class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            Loggedin: false,
            projects: [],
            issues:null,
            token: null
        }
        this.auth=this.auth.bind(this);
        this.getProjects = this.getProjects.bind(this);
    }
    auth({uname, password}){
        fetch(baseUrl+'users/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: uname, password: password})
        })
        .then((result) => result.json())
        .then((result) => {
            if(result.success){
                this.setState({
                    Loggedin: true,
                    token: result.token
                });
                localStorage.setItem('token', result.token);
                this.getProjects();
            }
        });
    }
    getProjects(){
        fetch(baseUrl+'projects',{
            method:"GET",
            headers:{
                'Authorization': 'Bearer '+this.state.token,
                'Content-Type': 'application/json'
            
            },
        })
        .then((projects) => projects.json())
        .then((projects)=>{
            this.setState({projects: projects})
        });
    }
    componentDidMount(){
        // this.setState({projects: PROJECTS});
        let token = localStorage.getItem('token');
        if(token!=null){
            fetch(baseUrl+'users',{
                headers: {
                    'Authorization': 'Bearer '+token
                }
            })
            .then((result) => {
                if(result.ok){
                    this.setState({Loggedin: true, token: token});
                    this.getProjects();
                }
            });
        }      
    }
    render(){
        
        return(
        <div>
          <Switch>
              <Route exact path='/home/:projectId' component={({match}) => <Insidedashboard projectId={match.params.projectId} Loggedin={this.state.Loggedin} project={this.state.projects.filter(project => project._id==match.params.projectId)[0]} />} />
              <Route exact path='/home' component={() => <Dashboard Loggedin={this.state.Loggedin} projects={this.state.projects} />} />
              <Route exact path='/app' component={() => <Appdata issues={this.state.issues} />} />
              <Route exact path='/filespop' component={() => <Addpop  />} />
              <Route exact path='/addProject/addTask' component={() => <Formm />} />
              <Route exact path='/addProject' component={() => <Projectform />} />
              <Route exact path='/login' component={() => <Login Loggedin={this.state.Loggedin} auth={this.auth} />} />
              <Redirect to='/login' />
          </Switch>
        </div>
        );
    }
}
 export default Main;