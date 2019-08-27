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



class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            Loggedin: false,
            projects: null,
            issues:null,
        }
        this.auth=this.auth.bind(this);
    }
    auth({uname, password}){
        if(uname ==="Ayushi"&& password ==="12345" ){
            // localStorage.setItem("token","qwertyuiop")
            this.setState({
                Loggedin: true
            })
        }
    }
    componentDidMount(){
        this.setState({projects: PROJECTS});
        this.setState({issues: Issues});
    }
    render(){
        
        return(
        <div>
          <Switch>
              <Route exact path='/dashboard' component={() => <Insidedashboard Loggedin={this.state.Loggedin} />} />
              <Route exact path='/home' component={() => <Dashboard Loggedin={this.state.Loggedin} projects={this.state.projects} />} />
              <Route exact path='/app' component={() => <Appdata issues={this.state.issues} />} />
              <Route exact path='/filespop' component={() => <Addpop  />} />
              <Route exact path='/login' component={() => <Login Loggedin={this.state.Loggedin} auth={this.auth} />} />
              <Redirect to='/login' />
          </Switch>
        </div>
        );
    }
}
 export default Main;