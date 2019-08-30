import React, {Component} from 'react';
import './appdata.css';
import Image from './imgcomp';
import Add from '../add.png';
import App from './popup';
import Addpop from'./add';
import Navbar from '../project/navbar';
import {Link} from 'react-router-dom';
class Folders extends Component{
 
  render()
    {
         return(<div>
             <div>
                 <Navbar/>
       </div>
       <div className="row"  >
        <div className="col-6 col-sm-6 col-md-6 " >
           <textarea name="comment" form="usrform" className="text">Uploaded Files</textarea>
          </div>
       <div className=" col-6 col-sm-6 col-md-6">
       <textarea name="comment" form="usrform" className="text">Comments</textarea> 
        </div>
        <form  ref='uploadForm' id='uploadForm' action='http://localhost:1337/upload' method='post' encType="multipart/form-data">
            <input type="file" name="file" onChange={this.onChangeHandle}/>
            <input type='submit' value='Upload!' onClick={this.onClickUpload} />
            </form>
        
         
         </div>
         </div>

          
         );


    }
}

export default Folders;
