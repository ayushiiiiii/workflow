import React, {Component} from 'react';
import './appdata.css';
import Image from './imgcomp';
import Navbar from '../project/navbar';
import { baseUrl } from '../baseurl';
import FileSystem from '../filesystem/filesystem';

const FileWindow = ({fileId, fileError}) => {
  if(fileId=='' && !fileError){
    return(<div className="icon"><i className="fas fa-spinner fa-3x fa-pulse text-primary ic"></i></div>);
  }else if(fileError){
    return(<textarea rows="20" cols="80" defaultValue="File Not Found"></textarea>);
  }else{
    return(<FileSystem fileId={fileId} ></FileSystem>);
  }
}

class Folders extends Component{
  constructor(props){
    super(props);
    this.state={
      fileId: '',
      fileError: false
    }
  }
  componentDidMount(){
    fetch(baseUrl+'resolve',{
      method: "POST",
      headers:{
          'Authorization': 'Bearer '+this.props.token,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({path: "data/"+this.props.projectId+"/"+this.props.folder})
    })
    .then(() => fetch(baseUrl+'files/files'))
    .then(root => root.json())
    .then(root => fetch(baseUrl+'files/files/'+root.id+'/children'))
    .then(projects => projects.json())
    .then(projects => {
      let projectId='';
      projects.items.forEach(project => {
        if(project.name==this.props.projectId){
          projectId=project.id;
          return false;
        }
      })
      if(projectId==''){
        let err = new Error('Project Not found!');
        err.status=404;
        return err;
      }else return fetch(baseUrl+'files/files/'+projectId+'/children');
    })
    .then(items => items.json())
    .then(items => {
      items.items.forEach(item => {
        if(item.name==this.props.folder){
          this.setState({fileId: item.id});
          return false;
        }
      });
      if(this.state.fileId==''){
        this.setState({fileError: true});
      }
    },(err) => console.log(err));
  }
  render(){
    const fol = [];
    for(let i=0;i<12;i++){
      fol.push(<Image/>);
    }
    if(this.props.project){
      return(
        <div>
          <div>
          <Navbar logOut={this.props.logOut} start_date={this.props.project.start_date} end_date={this.props.project.fat_date} project_name={this.props.project.name} location={this.props.project.location}/>
          </div> 
          <br/>
            <div className="row">
              <div className="col-12" >
                <FileWindow fileId={this.state.fileId} fileError={this.state.fileError} />
              </div>
            </div>
          </div>
      );
    }else{
      return(<div className="icon"><i className="fas fa-spinner fa-3x fa-pulse text-primary ic"></i></div>);
    }
  }
}

export default Folders;
