import React, {Component} from 'react';
import './appdata.css';
import Image from './imgcomp';
import Add from '../add.png';
import App from './popup';
import Addpop from'./add';
import Navbar from '../project/navbar';
import {Link} from 'react-router-dom';
import { baseUrl } from '../baseurl';
import FileSystem from '../filesystem/filesystem';

const FileWindow = ({fileId, fileError}) => {
  console.log(fileId);
  console.log(fileError);
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
      body: JSON.stringify({path: "data/"+this.props.projectId})
    }).then(() => {
      return fetch(baseUrl+'files/files/Lw/children');
    }).then(items => items.json())
    .then(items => {
      items.items.forEach(item => {
        if(item.name==this.props.projectId){
          this.setState({fileId: item.id});
          return false;
        }
      });
      if(this.state.fileId=='') this.setState({fileError: true});
    },(err) => console.log(err));
  }
  render(){
    const fol = [];
    for(let i=0;i<12;i++){
      fol.push(<Image/>);
    }
    return(
      <div>
        <div>
          <Navbar/>
        </div> 
        <br/>
          <div className="row">
            <div className="col-12" >
              <FileWindow fileId={this.state.fileId} fileError={this.state.fileError} />
            </div>
            <div className=" col-6 col-sm-6 col-md-6 ">
              <textarea rows="20" cols="80" defaultValue="Comments"></textarea>
            </div>
          </div>
        </div>
    );
  }
}

export default Folders;
