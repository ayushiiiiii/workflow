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
import Edittask from './adminpanel/edittask';
import Com from './adminpanel/comments';
import Complete from './adminpanel/completion';
import UAccess from './adminpanel/useraccess';
import Manage from './adminpanel/manage_user';
import Editmanage from './adminpanel/editmanageuser';

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
            user: null,
            users: []
        }
        this.auth=this.auth.bind(this);
        this.getProjects = this.getProjects.bind(this);
        this.postProject = this.postProject.bind(this);
        this.addUser = this.addUser.bind(this);
        this.editTasks = this.editTasks.bind(this);
        this.addTask = this.addTask.bind(this);
        this.editProject = this.editProject.bind(this);
        this.editTask = this.editTask.bind(this);
        this.logOut = this.logOut.bind(this);
        this.listUsers = this.listUsers.bind(this);
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
    editProject({projectId, project}){
        fetch(baseUrl+'projects/'+projectId,{
            method: "PUT",
            headers: {
                'Authorization': 'Bearer '+this.state.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then(project => project.json())
        .then(project => {
            let temp = this.state.projects;
            for(let i=0;i<temp.length;i++){
                if(temp[i]._id==project._id){
                    temp[i]=project;
                    break;
                }
            }
            this.setState({projects: temp});
        })
    }
    editTasks({projectId, tasks}){
        for(let i=0;i<tasks.length;i++){
            tasks[i].members  =tasks[i].members.map(member => member.username);
            for(let j=0;j<tasks[i].comments.length;j++){
                tasks[i].comments[j].author = tasks[i].comments[j].author._id;
            }
        }
        fetch(baseUrl+'projects/'+projectId,{
            method: "PUT",
            headers:{
                'Authorization': 'Bearer '+this.state.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({tasks: tasks})
        }).then(project => project.json())
        .then(project => {
            let temp = this.state.projects;
            for(let i=0;i<temp.length;i++){
                if(temp[i]._id===projectId){
                    temp[i]=project;
                    this.setState({projects: temp});
                    break;
                }
            }
        }).catch(err => console.log(err));
    }
    editTask(projectId, taskId, task, members){
        let addMembers=[],projectIndex=-1,taskIndex=-1,temp = this.state.projects;;
        fetch(baseUrl+'projects/'+projectId+'/tasks/'+taskId, {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer '+this.state.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        }).then(task => task.json())
        .then(async(task) => {
            let curMembers = task.members.map(member => member.username);
            members.forEach(member => {
                if(curMembers.indexOf(member)==-1){
                    addMembers.push(member);
                }
            });
            for(let i=0;i<temp.length;i++){
                if(temp[i]._id==projectId){
                    projectIndex=i;
                    for(let j=0;j<temp[i].tasks.length;j++){
                        if(temp[i].tasks[j]._id==taskId){
                            taskIndex=j;
                            temp[i].tasks[j]=task;
                            break;
                        }
                    }
                    break;
                }
            }
            for(let i=0;i<curMembers.length;i++){
                if(members.indexOf(curMembers[i])==-1){
                    await fetch(baseUrl+'projects/'+projectId+'/tasks/'+taskId+'/members/'+curMembers[i],{
                        method: "DELETE",
                        headers: { 'Authorization': 'Bearer '+this.state.token }
                    });
                }
            }
            return;
        }).then(() => {
            return fetch(baseUrl+'projects/'+projectId+'/tasks/'+taskId+'/members',{
                method: "POST",
                headers: {
                    'Authorization': 'Bearer '+this.state.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({members: addMembers})
            });
        }).then(res => res.json())
        .then(res => {
            if(projectIndex!==-1 && taskIndex!==-1){
                temp[projectIndex].tasks[taskIndex].members=res;
            }
            this.setState({projects: temp});
        },err => console.log(err));
    }
    addTask({projectId,task}){
        fetch(baseUrl+'projects/'+projectId+'/tasks',{
            method: "POST",
            headers: {
                'Authorization': 'Bearer '+this.state.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({tasks: [task]})
        }).then(project => project.json())
        .then(project => {
            let temp = this.state.projects;
            for(let i=0;i<temp.length;i++){
                if(temp[i]._id==projectId){
                    temp[i]=project;
                    break;
                }
            }
            this.setState({projects: temp});
        },(err) => console.log(err));
    }
    listUsers(){
        fetch(baseUrl+'users/list',{
            headers: {
                'Authorization': 'Bearer '+this.state.token
            }
        }).then(res => res.json())
        .then(users => this.setState({users: users}),(err) => console.log(err));
    }
    getUser(userId){
        fetch(baseUrl+'users/list/'+userId,{
            headers: {
                'Authorization': 'Bearer '+this.state.token
            }
        }).then(res => res.json())
        .then(users => this.setState({users: users}),(err) => console.log(err));
    }
    logOut(){
        localStorage.removeItem('token');
        this.setState({
            Loggedin: false,
            projects: [],
            issues:null,
            token: null,
            isProjectsLoading: true,
            user: null
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
        let routes=[];
        if(this.state.user.type.file_access){
            routes.push(<Route exact path='/home/:projectId/file-system/:fileName' component={({match}) => <Appdata upload={this.state.user.type.upload} download={this.state.user.type.download} logOut={this.logOut} projectId={match.params.projectId} folder={match.params.fileName} token={this.state.token} project={this.state.projects.filter(project => project._id==match.params.projectId)[0]} />} />);
        }if(this.state.user.type.data_entry){
            routes.push(<Route exact path='/addProject' component={() => <Projectform postProject={this.postProject} />} />);
            routes.push(<Route exact path='/home/:projectId/complete' component={({match}) => <Complete editTasks={this.editTasks} projectId={match.params.projectId} tasks={this.state.projects.length>0?this.state.projects.filter(project => project._id==match.params.projectId)[0].tasks:[]} />} />);
        }if(this.state.user.type.admin){
            routes.push(<Route exact path='/access' component={()=> <UAccess token={this.state.token} /> }/>);
            routes.push(<Route exact path='/signup' component={() => <Sign addUser={this.addUser} />} />);
            routes.push(<Route exact path='/manage' component={() => <Manage listUsers={this.listUsers} users={this.state.users} />} />);
            routes.push(<Route exact path='/Edit/:userId' component={({match}) => <Editmanage getUser={this.getUser.bind(this)} userId={match.params.userId} />} />);
        }
        return(
        <div>
          <Switch>
              <Route exact path='/home/:projectId' component={({match}) => <Insidedashboard file_access={this.state.user.type.file_access} data_entry={this.state.user.type.data_entry}  logOut={this.logOut} editTask={this.editTask} projectId={match.params.projectId} addTask={this.addTask} project={this.state.projects.filter(project => project._id==match.params.projectId)[0]} />} />
              <Route exact path='/home' component={() => <Dashboard data_entry={this.state.user.type.data_entry} logOut={this.logOut} editProject={this.editProject} getProjects={this.getProjects} token={this.state.token} projects={this.state.projects} isProjectsLoading={this.state.isProjectsLoading} />} />
              <Route exact path='/admin' component={() => <Admin admin={this.state.user.type.admin} data_entry={this.state.user.type.data_entry} logOut={this.logOut} />} />
              <Route exact path='/home/:projectId/:taskId/comments' component={({match}) => <Com user={this.state.user} comments={this.state.user.type.comments} token={this.state.token} projectId={match.params.projectId} taskId={match.params.taskId} />} />
              {routes}
              <Redirect to='/admin' />
          </Switch>
        </div>
        );
    }
}
 export default Main;