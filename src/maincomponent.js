import React, {Component} from 'react';
import './insidedashboard.css';
import Login from './login/login';
import Dashboard from './dashboard/dashboard';
import Appdata from './dashboard/appdata';
import Insidedashboard from './insidedashboard';
import { Switch, Route, Redirect } from 'react-router-dom';
import Addpop from'./dashboard/add';
import Projectform from './adminpanel/projecttask';
import Admin from './adminpanel/adminpage';
import { baseUrl } from './baseurl';
import Sign from './adminpanel/signup';
import Editp from './adminpanel/editproject';
import Edittask from './adminpanel/edittask';
import Com from './adminpanel/comments';
import Complete from './adminpanel/completion';
import UAccess from './adminpanel/useraccess';
import List from './dashboard/listproject';
import Disable from './dashboard/disablecard';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            Loggedin: false,
            projects: [],
            issues:null,
            token: null,
            isLoginLoading: true,
            isProjectsLoading: true,
            user: null
        }
        this.auth=this.auth.bind(this);
        this.getProjects = this.getProjects.bind(this);
        this.postProject = this.postProject.bind(this);
        this.addUser = this.addUser.bind(this);
        this.editTasks = this.editTasks.bind(this);
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
                    token: result.token,
                    user: result.user
                });
                localStorage.setItem('token', result.token);
                this.getProjects();
            }
        });
    }
    addUser({user}){
        fetch(baseUrl+'users/adduser',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+this.state.token
            },
            body: JSON.stringify(user)
        })
        .then((result) => result.json())
        .then((result) => {
            alert(result.status);
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
            this.setState({projects: projects, isProjectsLoading: false});
        });
    }
    postProject({project}){
        var cache=[];
        let stringified = JSON.stringify(project, (key, value) => {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    return;
                }
                cache.push(value);
            }
            return value;
        });
        cache=null;
        fetch(baseUrl+'projects',{
            method: "POST",
            headers:{
                'Authorization': 'Bearer '+this.state.token,
                'Content-Type': 'application/json'
            },
            body: stringified
        })
        .then(project => project.json())
        .then(project => {
            this.setState({projects: [...this.state.projects, project]})
        }).catch((err) => console.log(err));
    }
    editTasks({projectId, tasks}){
        fetch(baseUrl+'projects/'+projectId,{
            method: "PUT",
            headers:{
                'Authorization': 'Bearer '+this.state.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({tasks: tasks})
        }).then(project => project.json())
        .then(project => {
            this.setState({project: project});
        }).catch(err => console.log(err));
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
            .then(result => result.json())
            .then((result) => {
                this.setState({Loggedin: true, token: token});
                this.getProjects();
                this.setState({isLoginLoading: false, user: result});
            }).catch(err => {
                this.setState({isLoginLoading: false});
                console.log(err);
            });
        }else{
            this.setState({isLoginLoading: false});
        }      
    }
    render(){
        if(this.state.isLoginLoading==true){
            return(<div className="icon"><i className="fas fa-spinner fa-3x fa-pulse text-primary ic"></i></div>);
        }
        if (!this.state.Loggedin){
            return(
                <Switch>
                    <Route exact path='/login' component={() => <Login auth={this.auth} user={this.state.user} />} />
                    <Redirect to='/login' />
                </Switch>
            );
        }
        return(
        <div>
          <Switch>
              <Route exact path='/home/:projectId' component={({match}) => <Insidedashboard projectId={match.params.projectId} Loggedin={this.state.Loggedin} project={this.state.projects.filter(project => project._id==match.params.projectId)[0]} />} />
              <Route exact path='/home' component={() => <Dashboard projects={this.state.projects} isProjectsLoading={this.state.isProjectsLoading} />} />
              <Route exact path='/home/:projectId/file-system/:fileName' component={({match}) => <Appdata projectId={match.params.projectId} folder={match.params.fileName} token={this.state.token} project={this.state.projects.filter(project => project._id==match.params.projectId)[0]} />} />
              <Route exact path='/filespop' component={() => <Addpop  />} />
              <Route exact path='/addProject' component={() => <Projectform postProject={this.postProject} />} />
              <Route exact path='/signup' component={() => <Sign addUser={this.addUser} />} />
              <Route exact path='/admin' component={() => <Admin />} />
              <Route exact path='/editproject' component={() => <Editp />} />
              <Route exact path='/edittask' component={() => <Edittask />} />
              <Route exact path='/home/:projectId/:taskId/comments' component={({match}) => <Com user={this.state.user} token={this.state.token} projectId={match.params.projectId} taskId={match.params.taskId} />} />
              <Route exact path='/home/:projectId/complete' component={({match}) => <Complete editTasks={this.editTasks} projectId={match.params.projectId} tasks={this.state.projects.length>0?this.state.projects.filter(project => project._id==match.params.projectId)[0].tasks:[]} />} />
              <Route exact path='/access' component={()=> <UAccess token={this.state.token} /> }/>
              <Route exact path='/list' component={()=> <List/> }/>
              <Route exact path='/disable' component={()=> <Disable />}/>
              <Redirect to={this.state.user.type.name=="Review"?'/admin':'/home'} />
          </Switch>
        </div>
        );
    }
}
 export default Main;