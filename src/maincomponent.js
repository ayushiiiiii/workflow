import React, {Component} from 'react';
import './insidedashboard.css';
import Project from './project/project';
import Login from './login/login';
import HttpService from './services/http-service';
import Dashboard from './dashboard/dashboard';
import Insidedashboard from './insidedashboard';
import { Switch, Route, Redirect } from 'react-router-dom';



class Main extends Component{
    render(){
        return(
        <div>
          <Switch>
              <Route path='/dashboard' component={() => <Insidedashboard />} />
              <Route path='/home' component={() => <Dashboard />} />
              <Route path='/login' component={() => <Login />} />
              <Redirect to='/login' />
          </Switch>
        </div>
        );
    }
}
 export default Main;