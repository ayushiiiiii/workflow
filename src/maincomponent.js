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
            projects: null,
            issues:null,
            token: null
        }
        this.auth=this.auth.bind(this);
    }
    auth({uname, password}){
        fetch(baseUrl+'users/login',{
            crossDomain: true,
            method: 'POST',
            body: JSON.stringify({username: uname, password: password})
        })
        // .then((result) => result.json())
        .then((result) => {
            console.log(result);
            if(result.success){
                this.setState({
                    Loggedin: true,
                    token: result.token
                });
                localStorage.setItem('token', result.token);
            }
        });
    }
    componentDidMount(){
        this.setState({projects: PROJECTS});
        let token = localStorage.getItem('token');
        if(token!=null){
            fetch(baseUrl+'users',{
                headers: {
                    'Authorization': 'Bearer '+token
                }
            })
            .then((result) => {
                this.setState({Loggedin: true});
            });
        }
    }
    render(){
        
        return(
        <div>
          <Switch>
              <Route exact path='/dashboard' component={() => <Insidedashboard Loggedin={this.state.Loggedin} />} />
              <Route exact path='/home' component={() => <Dashboard Loggedin={this.state.Loggedin} projects={this.state.projects} />} />
              <Route exact path='/app' component={() => <Appdata issues={this.state.issues} />} />
              <Route exact path='/filespop' component={() => <Addpop  />} />
              <Route exact path='/sheet' component={() => <Formm />} />
              <Route exact path='/project' component={() => <Projectform />} />
              <Route exact path='/login' component={() => <Login Loggedin={this.state.Loggedin} auth={this.auth} />} />
              <Redirect to='/login' />
          </Switch>
        </div>
        );
    }
}
 export default Main;