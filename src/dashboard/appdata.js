import React, {Component} from 'react';
import './appdata.css';
import Image from './imgcomp';
import Add from '../add.png';
import App from './popup';
import Addpop from'./add';
import Navbar from '../project/navbar';
import {Link} from 'react-router-dom';
class Folders extends Component{
  // constructor(props){
  //   super(props);
  //   this.state={
  //    list:[]
  //   }
  // } 
    // onChangeHandle=event=>{
    //   const reader = newFileReader();
    //   reader.readAsArrayBuffer(event.target.files[0]);
    //   console.log(Buffer.from(rea))
    //   //  axios({
    // //    method:'post',
    // //    url:'http://localhost:1337/',
    // //    data:event.target.files[0],
    // //    config:{headers:{'Content-Type':'mul'}}
    // //  })
    // }  
    // onClickUpload(){
      
      
    // }
  render()
    {
      
      const fol = [];
        for(let i=0;i<12;i++){
          fol.push(<Image/>);
        }
         return(<div>
             <div>
                 <Navbar/>
       </div> 
       <br/>
    <div className="row">
        <div className="col-6 col-sm-6 col-md-6 " >
          <textarea rows="20" cols="80"> File System</textarea>
        </div>
        <div className=" col-6 col-sm-6 col-md-6 ">
           <textarea rows="20" cols="80"> Comments</textarea>
        </div>
        <div>
        <form ref='uploadForm' id='uploadForm' action='http://localhost:1337/upload' method='post' encType="multipart/form-data">
            <input type="file" name="file" onChange={this.onChangeHandle}/>
            <input type='submit' value='Upload!' onClick={this.onClickUpload} />
            </form>
            </div>
        </div>
        </div>
        
         
         
          
         );


    }
}

export default Folders;
